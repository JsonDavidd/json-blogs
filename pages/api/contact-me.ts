import { NextApiRequest, NextApiResponse } from "next";
import sgMail, { MailDataRequired } from "@sendgrid/mail"
const { SENDGRID_VERIFIED_SENDER, SENDGRID_API_KEY, SENDGRID_RECIPIENT } = process.env

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { email, name, message } = JSON.parse(await req.body)

  try {
    if ([SENDGRID_API_KEY, SENDGRID_RECIPIENT, SENDGRID_VERIFIED_SENDER].some(x => typeof x !== 'string'))
      throw new Error("Invalid SendGrid's environment variables");

    sgMail.setApiKey(SENDGRID_API_KEY as string)
    const mail: MailDataRequired = {
      to: SENDGRID_RECIPIENT as string,
      from: SENDGRID_VERIFIED_SENDER as string,
      subject: `SendGrid's Bot from Json Blogs: ${name}`,
      replyTo: email,
      text: message
    }

    await sgMail.send(mail)
    res.status(200).send('Email Sent')

  } catch (error: any) {
    console.error(error)
    res.status(400).send(error?.message || JSON.stringify(error))
  }
}