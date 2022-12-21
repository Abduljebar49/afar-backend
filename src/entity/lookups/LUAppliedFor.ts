import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import LookUpModel from "../LUBase";

@Entity()
export class AppliedFor extends LookUpModel {
  @Column()
  name: string;
}
