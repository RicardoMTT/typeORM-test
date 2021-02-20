import express from "express";
import morgan from "morgan";
import cors from "cors";
import tipeDocumentsRoutes from "./routes/tipoDocumento.routes";
import tipeContribuyenteRoutes from "./routes/tipoContribuyente.routes";
import entidadRoutes from "./routes/entidad.routes";
import userRoutes from "./routes/user.routes";
import "reflect-metadata";
import { createConnection } from "typeorm";
import helmet from "helmet";
const app = express();

createConnection();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(helmet());
// Routes
app.use(tipeContribuyenteRoutes);
app.use(tipeDocumentsRoutes);
app.use(entidadRoutes);
app.use(userRoutes);
app.listen(4000);
console.log(4000);
