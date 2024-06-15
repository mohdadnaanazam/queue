// docker run -itd -p 6379:6379 redis

const { Queue } = require('bullmq')

const notificationsQueue = new Queue('notifications')

async function init() {
  // queue ke andar hm job dalte hai har job ka nam de dia sendEmail
  const res = await notificationsQueue.add('sendEmail', {
    to: 'adnaan28.azam@gmail.com',
    subject: 'Hello',
    body: 'Hello, World!'
  })

  console.log('Job added to queue', res.id)
}

init()