import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import Model from "../Base";

@Entity()
export class ProfessionalEducation extends Model {
  @Column()
  professionalId: number;

  @Column()
  educationInstitute: string;

  @Column()
  fieldOfStudy: string;

  @Column()
  professionalTitle: string;

  @Column()
  dateReceived: Date;

  @Column()
  educationFile: string;
}
