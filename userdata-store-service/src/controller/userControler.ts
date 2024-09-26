import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import * as Dbmodel from '../../models/index';
 import * as UserHelper from '../../helpers/UserHelper'



export const saveUser = async (userData:any) => {
  try { 
    const user = await Dbmodel.userModel.create(userData);
    console.log('User data saved:', user);
    return user;
  } catch (err) {
    console.error('Error saving user data:', err);
    
  }
};


export const updateUserById = async (call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>) => {



  console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
  
  try {
    const { id, userName, email, fullName, address, gender, DOB, phoneNo } = call.request;
    console.log("gRPC Request:", call.request);

    if (!id) {
      return callback({
        code: grpc.status.INVALID_ARGUMENT,
        details: 'User ID is required',
      }, null);
    }

    const userData:any = { userName, email, fullName, address, gender, DOB, phoneNo };

    if (Object.keys(userData).filter((key) => userData[key]).length === 0) {
      return callback({
        code: grpc.status.INVALID_ARGUMENT,
        details: 'No data to update',
      }, null);
    }

    const updatedUser = await UserHelper.updateUserByIds(id, userData);

    if (updatedUser) {
      callback(null, {
        success: true,
        message: "User updated successfully",
        user: updatedUser,
      });
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: 'User not found',
      }, null);
    }
  } catch (error: any) {
    console.error("Error updating user by ID:", error);
    callback({
      code: grpc.status.INTERNAL,
      details: 'Something went wrong',
    }, null);
  }
};

