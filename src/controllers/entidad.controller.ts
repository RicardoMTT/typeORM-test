import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Entidad } from "../entity/entidad";
import { User } from "../entity/user";

export const getEntities = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const typeDocuments = await getRepository(Entidad).find({
    relations: ["tipoDocumento", "tipoContribuyente"],
  });
  return res.json(typeDocuments);
};

export const createEntity = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newTypeDocument = await getRepository(Entidad).create(req.body);
  const results = await getRepository(Entidad).save(newTypeDocument);
  return res.json(results);
};

export const deleteEntity = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = req.params.id;
  const response = await getRepository(Entidad).delete(id);
  console.log(response);

  return res.json("delete");
};

export const updateEntity = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = req.params.id;
  const user = await getRepository(User).findOne(id);
  if (user) {
    getRepository(User).merge(user, req.body); // Reemplaza algunos valore(valores nuevos)
    const result = getRepository(User).save(user);
    return res.json(result);
  }
  return res.json({ message: "error" });
};
