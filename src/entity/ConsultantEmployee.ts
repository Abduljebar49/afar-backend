import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "./Base";
import { Consultant } from "./Consultant";

@Entity()
export class ConsultantEmployee  extends Model{
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

  @ManyToOne((type)=>Consultant,(ca)=>ca.employees)
  consultant:Consultant
}
