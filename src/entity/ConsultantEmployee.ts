import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "./Base";
import { Contractor } from "./Contractor";

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

  // @ManyToOne((type)=>Contractor,(ca)=>ca.cars)
  // contractor:Contractor
}
