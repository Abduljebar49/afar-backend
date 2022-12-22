import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import LookUpModel from "./LUBase";

@Entity()
export class PropertyType extends LookUpModel {
  @Column()
  name: string;
}
