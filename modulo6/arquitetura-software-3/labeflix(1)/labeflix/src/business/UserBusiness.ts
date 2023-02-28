import { UserDatabase } from "../data/UserDatabase"
import { generateId } from "../servives/idGenerator"


export class UserBusiness {
  public createUser = async (imput = any) => any):Promise<void> {
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id: string = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }

}
