class KafkaHelperConsume {
    static referralCode(message: any): void {
      try {
        console.log('Processing referral code message:', message);
        if (message.code) {
          console.log(`Referral Code: ${message.code}`);
        } else {
          console.warn('Invalid referral code message received.');
        }
      } catch (error) {
        console.error('Error processing referral code message:', error);
      }
    }
    static otherEvent(message: any): void {
      console.log('Processing other event:', message);
    }
  }
   export default KafkaHelperConsume;
                                        