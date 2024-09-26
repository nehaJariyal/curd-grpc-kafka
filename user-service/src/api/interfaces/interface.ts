import { Router } from 'express';
import { Model } from 'sequelize';
export interface Route{
  basePath: string;
  router: Router;
}
export interface KafkaCrednetials {
  clientId: string;
  brokers: string[];
}
export interface createUserInterface extends Model {
  id: number;
  email: string;
 userName: string;
  password: string;
  fullName: string;
 gender: string;
 DOB: string;
 address: string;
 phoneNo:number;
  created_at: string;
  updated_at: string;
}
 
