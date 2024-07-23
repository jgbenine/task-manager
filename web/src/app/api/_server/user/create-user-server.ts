import { hashSync } from "bcrypt-ts";
import { api } from "../../api";

export type UserType = {
  name: string;
  email: string;
  password: string;
};

export async function createUserServer({ name, email, password }: UserType) {
  
  //Criptografando password para salvar senha na base de dados.
  const hashedPassword = hashSync(password);
  try {
    const { data } = await api.post("/user", {
      name,
      email,
      password: hashedPassword,
    });
    return data;
  } catch (err) {
    throw new Error("Error creating user");
  }
}
