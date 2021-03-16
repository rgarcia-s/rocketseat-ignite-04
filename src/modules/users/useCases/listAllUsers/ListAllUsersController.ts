import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const id = request.headers.user_id;

      let user_id: string;

      if (typeof id !== "string") {
        [user_id] = id;
      } else {
        user_id = id;
      }

      const users = this.listAllUsersUseCase.execute({ user_id });

      return response.status(200).json(users);
    } catch (error) {
      return response.status(400).json({ error: "This user is not an admin" });
    }
  }
}

export { ListAllUsersController };
