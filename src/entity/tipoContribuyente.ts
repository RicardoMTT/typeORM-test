import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Entidad } from "./entidad";

@Entity()
export class TipoContribuyente {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  codigo: string;
  @Column()
  nombre: string;
  @Column()
  estado: string;
  @Column()
  descripcion: number;

  @OneToMany((type) => Entidad, (entidad) => entidad.tipoContribuyente)
  entidades: Entidad[];
}
