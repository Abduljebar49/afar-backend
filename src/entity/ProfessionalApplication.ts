import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import Model, { applicationStatus } from "./Base";

@Entity()
export class ProfessionalApplication extends Model {
  @Column()
  professionalId: string;

  @Column()
  filledById: string;

  @Column()
  approvedById: string;

  @Column()
  appliedForId: string;

  @Column()
  type: string;

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

  @Column({
    type: "enum",
    enum: applicationStatus,
    default: applicationStatus.PENDING,
    nullable: false,
  })
  status: applicationStatus;

  @Column()
  remark: string;

  @Column()
  amount: number;

}
