import { Request, Response } from "express";
import { AuthUserService } from "../services/auth.service";

export async function loginController(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const result = await AuthUserService(email, password);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
}
