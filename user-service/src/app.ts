import express from "express";
import bodyParser from "body-parser";
import userRoutes, * as UserRoutes from   './routes/userRoutes';
// import server from "../grpc/server";
import client from '../grpc/client/grpcClient';
const app: any = express();
const port: number = 4000;

app.use(bodyParser.json());
app.use("/", userRoutes.router);

app.listen(port, () => {
  // server
  console.log(` The server running on port: ${port}`);
});