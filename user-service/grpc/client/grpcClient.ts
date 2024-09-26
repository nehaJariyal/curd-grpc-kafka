import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

const PROTO_PATH = path.join(__dirname, '../proto/user.proto');
console.log("client::::::::::::::::::::::::::");

// Load the gRPC service definition
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const userProto = grpc.loadPackageDefinition(packageDefinition).user;

// Create a gRPC client instance
const client = new (userProto as any).UserService(
  'localhost:50051',
  grpc.credentials.createInsecure()

);

export default client;
