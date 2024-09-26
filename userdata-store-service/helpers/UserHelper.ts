import { where } from "sequelize";
import * as db from "../models/index";

 
export const updateUserByIds = async (id: any, userData: any) => {
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
