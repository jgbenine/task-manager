import { createUserServer } from "@/app/api/_server/user/create-user-server";

export default async function registerUser(formData: FormData){
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if(!name || !email || !password) {
    throw new Error('All fields are required');
  }

  try {
    await createUserServer({ name, email, password });
  } catch (error) {
    console.error('Error creating user:', error);
  }
}