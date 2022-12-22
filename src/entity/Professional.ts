import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import Model from "./Base";

@Entity()
export class Professional extends Model {
  @Column()
  name: string;

  @Column()
  gender: string;

  @Column()
  city: string;

  @Column()
  woreda: string;

  @Column()
  kebele: string;

  @Column()
  house_no: string;

  @Column()
  phoneNumber: string;

  @Column()
  managerName: string;

  @Column()
  photo: string;
}
