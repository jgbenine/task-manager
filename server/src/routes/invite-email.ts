import { FastifyInstance } from "fastify";
import { z } from "zod";
import { resendMail } from "../lib/resend";

const sendMailSchema = z.object({
  name: z.string().min(3),
  tel: z.string().min(4),
  email: z.string().email(),
  message: z.string().min(4),
});

export async function inviteEmail(app: FastifyInstance) {
  app.post("/sendmail", async (req, res) => {
    const validationResult = sendMailSchema.safeParse(req.body);

    if (!validationResult.success) {
      return res.status(400).send({
        error: validationResult.error.format(),
      });
    }

    const { name, tel, email, message } = validationResult.data;

    try {
      await resendMail(name, tel, email, message);
      res.status(200).send("Email sent successfully");
    } catch (error) {
      res.status(500).send("Error sending email router");
    }
  });
}
