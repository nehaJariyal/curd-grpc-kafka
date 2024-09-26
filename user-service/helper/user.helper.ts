import * as db from "../models/index";
export const createUser1 = async (data: any) => {
  try {
    const user = db.userModel.create({
      id: data.id,
      userName: data.userName,
      email: data.email,
      fullName: data.fullName,
      address: data.address,
      gender: data.gender,
      DOB: data.DOB,
      phoneNo: data.phoneNo,
      password: data.password,
      
    });
    return user;
  } catch (error: any) {
    console.error("Error creating user:", error);
    return false;
  }
};

 

 export const checkUserExistByEmail = async (email: string) => {
  try {
    const userEmail = await db.userModel.findOne({
      where: { email: email },
      raw: true,
    });
    return userEmail;
  } catch (error) {
    console.error("Error finding user by email:", error);
    throw new Error("Database error");
  }
};

 
 

export const getAllUsers = async () => {
    try {
      const users = await db.userModel.findAll();  
      return users;
    } catch (error) {
      console.error("Error fetching all users:", error);
      throw error;
    }
}

  export const getUserById = async (userId: string) => {
    try {
      const user = await db.userModel.findOne({where: { id: userId }});
      return user;
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      throw error;
    }
  };



export const updateUserById = async (id: any, userData: any) => {
  try {
    const user = await db.userModel.findOne({ where: { id } });
    if (!user) {
      console.log(`No user found with ID: ${id}`);
      return null;
    }

    const [affectedRows] = await db.userModel.update(userData, {
      where: { id },
    });

    if (affectedRows === 0) {
      console.log(`User with ID: ${id} was not updated.`);
      return null;
    }

    const updatedUser = await db.userModel.findOne({ where: { id } });
    console.log("Updated user with ID:", id);
    return updatedUser;

  } catch (error) {
    console.error("Error updating user by ID:", error);
    return false;
  }
};
