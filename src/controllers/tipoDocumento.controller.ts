import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { TipoDocumento } from "../entity/tipoDocumento";

export const getTypeDocuments = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const typeDocuments = await getRepository(TipoDocumento).find();
    return res.json(typeDocuments);
  } catch (error) {
    return res.json({ msg: error });
  }
};

export const createTypeDocuments = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newTypeDocument = await getRepository(TipoDocumento).create(req.body);
  const results = await getRepository(TipoDocumento).save(newTypeDocument);
  return res.json(results);
};

export const deleteTypeDocument = async (
  req: Request,
  res: Response
): Promise<Response> => {
  console.log("xd", req.params.id);

  const id = req.params.id;
  const response = await getRepository(TipoDocumento).delete(id);
  return res.json(response);
};

export const updateTipoDocumento = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = req.params.id;
  const user = await getRepository(TipoDocumento).findOne(id);
  if (user) {
    getRepository(TipoDocumento).merge(user, req.body); // Reemplaza algunos valore(valores nuevos)
    const result = await getRepository(TipoDocumento).save(user);
    return res.json(result);
  }
  return res.json({ message: "error" });
};
