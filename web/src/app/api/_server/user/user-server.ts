import { hashSync } from "bcrypt-ts";
import { api } from "../../api";

export type UserType = {
  id?: string;
  name: string;
  email: string;
  password: string;
};

//Rota para API Create User
async function createUser({ id, name, email, password }: UserType) {
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

//Rota p/ API Get User
async function getUserByEmail(email: string): Promise<UserType | null> {
  try {
    const response = await api.get<{ user: UserType }>(`/user/${email}`);
    const user = response.data.user;
    return user;
  } catch (error) {
    console.error("Erro ao buscar usuário por email:", error);
    return null;
  }
}

export const UserServer = { createUser, getUserByEmail };
