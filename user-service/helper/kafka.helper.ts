import { Kafka, Producer, Consumer } from 'kafkajs';
import * as Interface from '../src/api/interfaces/interface';
import * as KAFKA_EVENTS_TYPES from '../constant/kafkaEvents';
import KafkaHelperConsume from './KafkaHelperConsume';

class KafkaHelper {
  private kafka: Kafka;
  private producer: Producer;
  private consumer: Consumer;
  public groupId = 'test' 


  constructor() {
    this.kafka = this.createKafkaClient();
    this.producer = this.kafka.producer();
    this.consumer = this.kafka.consumer({ groupId: this.groupId });
    this.connectProducer();
    this.connectConsumer();
  }

  private createKafkaClient(): Kafka {
    const kafkaCredentials: Interface.KafkaCrednetials = {
      clientId: process.env.KAFKA_CLIENT_ID || 'test',
      brokers: [process.env.KAFKA_BROKER || 'localhost:9092']
    };
    return new Kafka(kafkaCredentials);
  }

  private async connectProducer(): Promise<void> {
    try {
      await this.producer.connect();
      console.log('Kafka Producer connected');
    } catch (error) {
      console.error('Error connecting Kafka Producer', error);
    }
  }

  public async produceMessage(topic: string, messageData: any[] = []): Promise<void> {
    const formattedMessages = messageData.map((element: any) => ({ value: JSON.stringify(element) }));
    try {
      await this.producer.send({
        topic: topic,
        messages: formattedMessages
      });
      console.log(`Message sent to topic: ${topic}`);
    } catch (error) {
      console.error(`Error sending message to topic ${topic}:`, error);
    }
  }

  private async connectConsumer(): Promise<void> {
    try {
      await this.consumer.connect();
      console.log('Kafka Consumer connected');
    } catch (error) {
      console.error('Error connecting Kafka Consumer', error);
    }
  }

  public async subscribeToTopic(topic: string, fromBeginning: boolean = false): Promise<void> {
    try {
      await this.consumer.subscribe({ topic, fromBeginning });
      console.log(`Subscribed to topic: ${topic}`);
    } catch (error) {
      console.error(`Error subscribing to topic ${topic}:`, error);
    }
  }

  public async consumeMessages(): Promise<void> {
    try {
      await this.consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
          const parsedMessage = message.value ? JSON.parse(message.value.toString()) : null;

          switch (topic) {
            case KAFKA_EVENTS_TYPES.EVENTS.REFERRAL_CODE:
              KafkaHelperConsume.referralCode(parsedMessage);
              break;
            default:
              console.warn(`Unhandled event type for topic: ${topic}`);
              break;
          }
        }
      });
      console.log('Consuming messages...');
    } catch (error) {
      console.error('Error consuming messages:', error);
    }
  }

  public async disconnect(): Promise<void> {
    try {
      await this.producer.disconnect();
      await this.consumer.disconnect();
      console.log('Kafka Producer and Consumer disconnected');
    } catch (error) {
      console.error('Error disconnecting Kafka components:', error);
    }
  }
}

export default new KafkaHelper();
