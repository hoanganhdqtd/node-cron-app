const cron = require("node-cron");
const dayjs = require("dayjs");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: SENDGRID_API_KEY,
    },
  })
);

const notificationTimes = ["10:00", "15:30", "18:45"];

const sendNotification = async () => {
  const notificationTimes = ["14:37"];
  const currentTime = dayjs().format("HH:mm");
  if (notificationTimes.includes(currentTime)) {
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: process.env.RECEIVER_EMAIL,
      subject: "Notification",
      text: "Notification.",
    };

    await transporter.sendMail(mailOptions);
    console.log("Notification sent at", currentTime);
  }
};

// Schedule the job to run every minute
cron.schedule("* * * * *", sendNotification);
