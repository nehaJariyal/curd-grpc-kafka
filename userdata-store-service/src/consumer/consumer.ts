 import { Kafka } from 'kafkajs';
import { saveUser } from '../controller/userControler';
  
  const kafka = new Kafka({
    clientId: 'test',
    brokers: ['localhost:9092'],  
  });
  
  const consumer = kafka.consumer({ groupId: 'test' });
  
 export const consumeMessages = async () => {
    try {
      await consumer.connect();
      await consumer.subscribe({ topic: 'user_events', fromBeginning: true });
  
      await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
          try {
            if (message.value === null) {
              console.error('Received message with null value');
              return;
            }
  
            const userData = JSON.parse(message.value.toString());
            console.log("Received user data:", userData);
  
            const { user } = userData;
            console.log("User details:", user);
  
            

            await saveUser(user);
  
          } catch (err) {
            console.error('Error processing message:', err);
          }
        }
      });
  
      console.log('Consuming messages...');
    } catch (err) {
      console.error('Error with Kafka consumer:', err);
    }
  };
  
  // consumeMessages();
  




