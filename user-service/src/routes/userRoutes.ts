import * as express from "express";
import UserController from "../controllers/userController"
import jwtMiddeleware from "../../middleware/jwt.authToken";
 
class UserRoutes {
  public router: any;

  constructor() {
    this.router = express.Router();
    this.registerRoutes();
  }

  protected registerRoutes(): void {
    this.router
      .get("/", (req: express.Request, res: express.Response) => {
        res.json({ data: "welcome !" });
      })

      .post("/sign", UserController.createUser)
      .post("/login", UserController.userLogin)
      .get("/getAll",UserController.getAllUsersFromRedis)
      .get("/users/:id",UserController.getUserById)
      .post("/update",UserController.updateUserById)
  
}
}

export default new UserRoutes()

 
