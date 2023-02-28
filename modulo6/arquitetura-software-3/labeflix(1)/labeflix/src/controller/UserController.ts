import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
  public createUser = async(req: Request, res: Response): {
    try {
      const input = { 
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      } 

      const userBusiness = new UserBusiness(input);

      await userBusiness.create({ email, name, password });

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
