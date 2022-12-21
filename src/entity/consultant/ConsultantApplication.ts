import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model, { applicationStatus } from "../Base";
import { ConsultantEntity } from "./Consultant";
 
@Entity()
export class ConsultantApplication extends Model {
  @Column({
    nullable: false,
  })
  consultantId: string;

  @Column({
    nullable: false,
  })
  appliedForId: number;

  @Column({default:new Date().toDateString()})
  applicationDate: string;

  @Column()
  certificateIssueDate: string;

  @Column()
  certificateValidYear: string;

  @Column({ nullable: false })
  serviceType: string;

  @Column({
    nullable: false,
  })
  serviceLevel: string;

  @Column()
  yearObtained: string;

  @Column()
  recordRemark: string;

  @Column({
    type: "enum",
    enum: applicationStatus,
    default: applicationStatus.PENDING,
    nullable: false,
  })
  status: applicationStatus;

  @Column()
  approvedById: number;

  @Column()
  amount: number;

  @ManyToOne((type)=>ConsultantEntity,(ca)=>ca.ConsultantApplications)
  consultant:ConsultantEntity
}
