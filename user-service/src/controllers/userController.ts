import { Request, Response } from "express";
import KafkaHelper from '../../helper/kafka.helper';
import * as UserHelper from "../../helper/user.helper";
import redisHelper from "../../helper/redis.helper";
import * as interfaces from "../api/interfaces/interface";
import generateJwtToken from "../../helper/jwtToken.helper";
import  grpcClient from "../../grpc/client/grpcClient"

 

const createUser = async (req: Request, res: Response) => {
    try {
        const dataObj: Partial<interfaces.createUserInterface> = {
            id: req.body.id,
            userName: req.body.userName,
            email: req.body.email,
            fullName: req.body.fullName,
            address: req.body.address,
            gender: req.body.gender,
            DOB: req.body.DOB,
            phoneNo: req.body.phoneNo,
            password: req.body.password,
        };
 
        const createUserResponse: any = await UserHelper.createUser1(dataObj);
        if (createUserResponse) {
            res.status(201).json({ code: 201, message: "User created successfully", data: createUserResponse });
        }  

        if (!createUserResponse || !createUserResponse.dataValues.id) {
            return res.status(400).json({ code: 400, message: "User creation failed or user ID not found" });
        }

        const userid = createUserResponse.dataValues.id;
        console.log(userid, "User ID created");

        const kafkaMessage = {
            eventType: 'USER_CREATED',
            user: {
                id: userid,
                email: dataObj.email,
                userName: dataObj.userName,
                fullName: dataObj.fullName,
                gender: dataObj.gender,
                DOB: dataObj.DOB,
                address: dataObj.address,
                phoneNo: dataObj.phoneNo,
                password: dataObj.password,
            }
        };

        try {
            await KafkaHelper.produceMessage('user_events', [kafkaMessage]);
        } catch (kafkaError) {
            console.error("Error sending Kafka message:", kafkaError);
            return res.status(500).json({ code: 500, message: "User created, but Kafka event production failed" });
        }

        const redisUserKey = `user`;

        await redisHelper.hashSet(redisUserKey, { [userid]: JSON.stringify(createUserResponse) });

    } catch (error: any) {
        console.error("Error creating user:", error);
        return res.status(500).json({ code: 500, message: "Could not create user due to internal server error" });
    }
};




export const userLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const user: any = await UserHelper.checkUserExistByEmail(email);
        if (!user) {
            return res.status(404).json({ code: 404, message: "User email and password not found" });
        }

        if (!user.password) {
            return res.status(401).json({ code: 401, message: "Invalid email or password" });
        }

        const token = generateJwtToken({ email: user.email, id: user.id });
        return res.status(200).json({ code: 200, message: "Login successful", data: { user, token } });
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ code: 500, message: "Internal server error" });
    }
};

 
 
const getAllUsersFromRedis = async (req: Request, res: Response) => {
    try {
        const redisKey = 'all_users';

        const allUsersData: any = await redisHelper.getString(redisKey);

        if (allUsersData) {
            const allUsers = JSON.parse(allUsersData);
            return res.status(200).json({ code: 200, message: "Users retrieved successfully from Redis", data: allUsers });
        }

        const allUsers = await UserHelper.getAllUsers();

        if (!allUsers || allUsers.length === 0) {
            return res.status(404).json({ code: 404, message: "No users found in database" });
        }

        await redisHelper.setString(redisKey, JSON.stringify(allUsers));

        res.status(200).json({ code: 200, message: "Users retrieved successfully from database", data: allUsers });
    } catch (error: any) {
        console.error("Error fetching users:", error);
        return res.status(500).json({ code: 500, message: "Internal server error" });
    }
};

  
 

const getUserById = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const redisUserKey = 'user';
 
        let userData = await redisHelper.hashGet(redisUserKey, [userId]);
 
        if (!userData || !userData[userId]) {
            console.log("User not found in Redis, fetching from Datatbase");

            const dbUser = await UserHelper.getUserById(userId);

            if (!dbUser) {
                return res.status(404).json({ code: 404, message: "User not found in Database" });
            }

           
            await redisHelper.hashSet(redisUserKey, { [userId]: JSON.stringify(dbUser) });

            userData = { [userId]: JSON.stringify(dbUser) };
        }
 
        const user = userData[userId];
        const parsedUser = typeof user === 'string' ? JSON.parse(user) : user;

        return res.status(200).json({ code: 200, message: "User retrieved successfully", data: parsedUser });
    } catch (error: any) {
        console.error("Error fetching user:", error);
        return res.status(500).json({ code: 500, message: "somthing went wrong" });
    }
};

  


 
 export const updateUserById = async (req: Request, res: Response) => {
    try {
        const userId: string = req.body.id;
        console.log("User ID:", userId);

        if (!userId) {
            return res.status(400).json({ code: 400, message: "User ID is required" });
        }

        const userData = req.body;
        console.log("User Data:", userData);

        if (Object.keys(userData).length === 0) {
            return res.status(400).json({ code: 400, message: "No data to update" });
        }

        const updatedUser = await UserHelper.updateUserById(userId, userData);
        const redisUserKey = `user`;

        if (updatedUser) {
            await redisHelper.hashSet(redisUserKey, { [userId]: JSON.stringify(updatedUser) });
            console.log("User data updated in Redis");

            grpcClient.UpdateUserById(updatedUser, (error: any, response: any) => {
                if (error) {
                    console.error("gRPC error updating user:", error);
                    return res.status(500).json({ code: 500, message: "Failed to update user in userData-store-service" });
                }

                console.log("gRPC update response:", response);

                return res.status(200).json({
                    code: 200,
                    message: "User updated successfully",
                    data: updatedUser,
                    grpcResponse: response
                });
            });
        } else {
            return res.status(404).json({ code: 404, message: "User not found" });
        }
    } catch (error) {
        console.error("Error updating user by ID:", error);
        return res.status(500).json({ code: 500, message: "Something went wrong" });
    }
};

 


  

export default {

    createUser,
    userLogin,
   getAllUsersFromRedis,
    getUserById,
    updateUserById
};
