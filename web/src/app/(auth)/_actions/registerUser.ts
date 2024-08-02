import { UserServer } from "@/app/api/_server/user/user-server";
import { redirect } from "next/navigation";


export default async function registerUser(formData: FormData){
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if(!name || !email || !password) {
    throw new Error('All fields are required');
  }

  try {
    await UserServer.createUser({ name, email, password });
    window.alert('User created successfully');
  } catch (error) {
    console.error('Error creating user:', error);
  }
  redirect('/')
}