import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import Model from "../Base";

@Entity()
export class ProfessionalApplication extends Model {
  @Column()
  professionalId: string;

  @Column()
  filledById: string;

  @Column()
  approvedById: string;

  @Column()
  appliedFor: string;

  @Column()
  registrationDate: Date;

  @Column()
  registeredAs: string;

  @Column()
  registeredNo: string;

  @Column()
  validYear: string;

  @Column()
  issuedDate: string;
}
