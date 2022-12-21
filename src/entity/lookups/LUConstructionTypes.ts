import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import LookUpModel from "../LUBase";

@Entity()
export class ContractionType extends LookUpModel {
  @Column()
  name: string;
}
