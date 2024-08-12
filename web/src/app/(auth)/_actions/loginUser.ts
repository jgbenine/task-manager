//Login para realizar no lado do servidor via actions
"use server";
import { AuthError } from "next-auth";
import { signIn } from "../../../../auth";

export default async function LoginUser(FormData: FormData) {
  const { email, password } = Object.fromEntries(FormData.entries());

  try {
    await signIn("credentials", { email, password });
  } catch (error) {
    if(error instanceof AuthError){
      if(error.type === 'CredentialsSignin'){
        error.message = 'Error, credentials invalid'
        window.alert('Error, credentials invalid');
        throw error;
      }
    }
  } 
}
