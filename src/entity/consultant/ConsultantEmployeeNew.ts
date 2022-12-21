import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "../Base";
import { ConsultantEntity } from "./Consultant";

@Entity()
export class ConsultantEmployeeNew  extends Model{
  @Column()
  consultantId: string;

  @Column()
  idNumber: string;

  @Column()
  fullName: string;

  @Column()
  position: string;

  @Column()
  competenceId: number;

  @Column()
  employmentType: string;

  @Column()
  numberOfEmployee: string;

  @Column()
  remark: string;

  @ManyToOne((type)=>ConsultantEntity,(ca)=>ca.employees)
  consultant:ConsultantEntity
}
