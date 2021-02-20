import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  CreateDateColumn,
} from "typeorm";

var bcrypt = require("bcryptjs");

@Entity()
@Unique(["username"])
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column({ length: 255 })
  password: string;
  @Column()
  role: string;
  @Column()
  @CreateDateColumn()
  createdAt: Date;
  @Column()
  @CreateDateColumn()
  updateAt: Date;

  hashPassword(): void {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }

  checkPassword(pass: string): boolean {
    return bcrypt.compareSync(pass, this.password);
  }
}
