import nodemailer from 'nodemailer'

export const transporter = () => {
  return nodemailer.createTransport({
    pool: true,
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'vronskyvitaly@mail.ru',
      pass: process.env.EMAIL_PASSWORD as string
    }
  })
}
