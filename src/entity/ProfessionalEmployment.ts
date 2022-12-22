import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "./Base";
import { Contractor } from "./Contractor";

@Entity()
export class ProfessionalEmployment  extends Model{
  @Column()
  professionalId: string;

  @Column()
  employer: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  employmentFile:string
}
