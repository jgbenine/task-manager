import { api } from "../../api";

async function sendEmail(name: string, email: string, tel: string, message: string) {
  const emailData = {
    name,
    email,
    tel,
    message
  };

  try {
    const { data } = await api.post('/sendmail', emailData);
    return data;
  } catch (err) {
    throw new Error("Error send mail: " + err);
  }
}

export const Email = {
  sendEmail
};
