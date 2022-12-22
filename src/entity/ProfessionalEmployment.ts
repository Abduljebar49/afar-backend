import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "./Base";
import { Contractor } from "./Contractor";

@Entity()
export class ProfessionalEmployment  extends Model{
  @Column()
  professionalId: string;

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
}
