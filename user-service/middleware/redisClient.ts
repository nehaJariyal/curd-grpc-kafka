import { createClient } from 'redis';

 
const redisClient = createClient({
  url: 'redis://localhost:6379' 
});

 
redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

(async () => {
  try {
    await redisClient.connect();
    console.log('Connected to Redis');
  } catch (err) {
    console.error('Error connecting to Redis:', err);
  }
})();







export default redisClient;
