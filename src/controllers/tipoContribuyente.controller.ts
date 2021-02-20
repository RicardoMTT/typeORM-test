import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { TipoContribuyente } from "../entity/tipoContribuyente";

export const getTypeContribuyent = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const typeDocuments = await getRepository(TipoContribuyente).find();
  return res.json(typeDocuments);
};

export const createTypeContribuyent = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newTypeDocument = await getRepository(TipoContribuyente).create(
    req.body
  );
  const results = await getRepository(TipoContribuyente).save(newTypeDocument);
  return res.json(results);
};
