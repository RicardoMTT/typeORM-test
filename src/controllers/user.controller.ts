import { Request, Response } from "express";
import { getRepository } from "typeorm";
import config from "../config/config";
import { User } from "../entity/user";
var jwt = require("jsonwebtoken");

export const users = async (req: Request, res: Response): Promise<Response> => {
  const user = await getRepository(User).find();
  return res.json(user);
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { username, password, role } = req.body;
  const user = new User();

  user.username = username;
  user.password = password;
  user.role = role;

  const userRepository = getRepository(User);
  try {
    user.hashPassword();
    const response = await userRepository.save(user);
    return res.json("user created");
  } catch (error) {
    console.log(error);

    return res.status(400).json({ message: "Error login" });
  }
};
export const login = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;
  if (!(username && password)) {
    res.status(400).json({ message: "Error 400" });
  }
  const userRepository = await getRepository(User);
  let user: User;
  try {
    user = await userRepository.findOneOrFail({
      where: {
        username,
      },
    });

    // Check password
    if (!user.checkPassword(password)) {
      return res
        .status(400)
        .json({ message: "Username or password incorrect" });
    }
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      config.jwtSecret,
      {
        expiresIn: "1h",
      }
    );
    return res.json({ message: "ok", token });
  } catch (error) {
    return res.status(400).json({ message: "Username or password incorrect" });
  }
};
