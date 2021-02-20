import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { TipoContribuyente } from "./tipoContribuyente";
import { TipoDocumento } from "./tipoDocumento";

@Entity()
export class Entidad {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nro_Documento: string;
  @Column()
  razonSocial: string;
  @Column()
  nombre_comercial: string;
  @Column()
  direccion: string;
  @Column()
  telefono: string;
  @Column()
  estado: number;

  @ManyToOne(
    (type) => TipoDocumento,
    (tipoDocumento) => tipoDocumento.entidades
  )
  tipoDocumento: TipoDocumento;
  @ManyToOne(
    (type) => TipoContribuyente,
    (tipoContribuyente) => tipoContribuyente.entidades
  )
  tipoContribuyente: TipoContribuyente;
}
