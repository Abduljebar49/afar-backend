import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import LookUpModel from "./LUBase";

@Entity()
export class Competency extends LookUpModel {
  @Column()
  name: string;
}
