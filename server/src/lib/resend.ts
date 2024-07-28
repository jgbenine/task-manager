import { env } from "process";
import { Resend } from "resend";

const resend = new Resend(env.EMAIL_API_KEY);

export function resendMail(name: string, tel: string, email: string,message: string) {
  (async function () {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "joaobenine@gmail.com",
      subject: "Contact Coopers Project",
      html: ` <strong>Nome:</strong> ${name}<br>
              <strong>Telefone:</strong> ${tel}<br>
              <strong>Email:</strong> ${email}<br>
              <strong>Mensagem:</strong> ${message}`,
    });

    if (error) {
      return console.error({ error });
    }
    console.log({ data });
  })();
}
