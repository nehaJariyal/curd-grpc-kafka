import { createClient } from "redis";
const port = 6379;
const host = "localhost";

class RedisHelper {
  private client: any;

  constructor() {
    this.client = createClient({ url: `redis://${host}:${port}` });
    this.client.connect();

    this.client.on("connect", () => {
      console.log("Redis Connected");
    });
  }

  async setString(key: string, value: string) {
    try {
      await this.client.set(key, value);
    } catch (error) {
      console.error("Error setting value in Redis:", error);
      throw error;
    }
  }
  async getString(key: string) {
    try {
      const value = await this.client.get(key);
      return value;
    } catch (error) {
      console.error("Error getting value from Redis:", error);
      throw error;
    }
  }

  async hashSet(
    key: string,
    values: Record<string, string>,
    expires = 0,
    database = "0"
  ) {
    try {
      if (database !== "") {
        await this.client.select(database);
      }
      await this.client.hSet(key, values);
      if (expires !== 0) {
        await this.client.expire(key, expires);
      }
      console.log(`Hash set successfully for key: ${key}`);
    } catch (error) {
      console.error("Error setting hash in Redis:", error);
      throw error;
    }
  }

  async hashGet(
    key: string,
    fields?: string[]
  ): Promise<Record<string, string> | null> {
    try {
      let result;

      if (fields && fields.length > 0) {
        result = await this.client.hGetAll(key);
      } else {
        result = await this.client.hMGet(key, fields);
      }
      if (Object.keys(result).length === 0) {
        console.log(`No data found for key: ${key}`);
        return null;
      }
      console.log(`Hash retrieved successfully for key: ${key}`);
      return result;
    } catch (error) {
      console.error("Error retrieving hash from Redis:", error);
      throw error;
    }
  }



}

export default new RedisHelper();
