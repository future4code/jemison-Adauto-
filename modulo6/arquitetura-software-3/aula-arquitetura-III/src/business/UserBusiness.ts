import { lchmod } from "fs";
import { UserDatabase } from "../data/UserDatabase";
import { v4 } from "uuid";
import { UserImputDTO } from "../models/userDTO";

export class UserBusiness {
   public createUser = async (input: UserImputDTO) => {
      //instanciar fora do try
      
      
      try {
         const userDatabase = new UserDatabase()
         const { name, nickname, email, password } = input
         
         if (
            !name ||
            !nickname ||
            !email ||
            !password
            ) {
               throw new Error('Preencha os campos "name","nickname", "email" e "password"')
            }
            
            const id: string = v4()
            
            const user:user = {

               id,
               name,
               nickname,
               email,
               password
            }
               
            
            await userDatabase.insertUser(user)
            
         } catch (error: any) {
            throw new Error(error.message)
         }
   }
   public getUsers = async () => {
      //instanciar fora do try  
      try {
         const userDatabase = new UserDatabase()
         console.log("estou aqui");
         
         return await userDatabase.getUsers();
         
      } catch (error: any) {
         throw new Error(error.message)
      }
   }
}
