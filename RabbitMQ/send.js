const amqp = require('amqplib');

async function sendMessage() {
    try {
        const connection = await amqp.connect('amqp://localhost:5672');
       const channel = await connection.createChannel();
        const queueName = 'hello';

        await channel.assertQueue(queueName, { durable: false });
        await channel.sendToQueue(queueName, Buffer.from('Hello World!'));

        console.log('Message sent: Hello World!');
        await channel.close();
        await connection.close();
    } catch (error) {
        console.error('Error sending message:', error);
    }
}

sendMessage();
