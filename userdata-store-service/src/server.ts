 

import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import { updateUserById } from '../src/controller/userControler';
import  {consumeMessages}  from './consumer/consumer';

const PROTO_PATH = path.join(__dirname, '../grpc/proto/user.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const userProto :any= grpc.loadPackageDefinition(packageDefinition).user;
const server = new grpc.Server();

server.addService(userProto.UserService.service, { UpdateUserById:updateUserById });

const PORT = 50051;
server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error(err);
    return;
  }
  server.start();
  console.log(`gRPC server running on port ${port}`);
});
consumeMessages()