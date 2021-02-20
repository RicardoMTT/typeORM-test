import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Entidad } from "./entidad";
@Entity()
export class TipoDocumento {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @Column()
  estado: number;

  @OneToMany((type) => Entidad, (entidad) => entidad.tipoDocumento)
  entidades: Entidad[];
}
