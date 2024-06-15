const { Worker } = require('bullmq')
const IORedis = require('ioredis');

const connection = new IORedis({
  maxRetriesPerRequest: null
});

const worker = new Worker('notifications', async job => {
  console.log(`Message rec id: ${job.id}`)
  console.log('processing message')
  console.log(`Sending notification to ${job.data.to}`)

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Notification sent')
      resolve()
    }, 5 * 1000)
  })

  console.log('Notification sent successfully')
}, { connection })
