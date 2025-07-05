import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,              // 587 for non secure, 465 for secure
    secure: false,
    auth: {
    // replace `user` and `pass` values 
    user: 'maddison53@ethereal.email',
    pass: 'jn7jnAPss4f63QBp6D'
    }
});

// Wrap in an async IIFE so we can use await.
(async () => {
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
    to: "avimalhotra505@gmail.com, avimalhotra@techaltum.com",
    subject: "Hello There, testing node mailer",
    text: "Hello world?",                                   // plain‑text body
    html: `<pre style="white-space:pre-wrap;">Hello there,
    how are you doing?

    Thanks.
    </pre>`
  });

  console.log("Message sent:", info.messageId);
})()

