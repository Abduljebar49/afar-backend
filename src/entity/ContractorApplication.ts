import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model, { applicationStatus } from "./Base";
import { Contractor } from "./Contractor";

@Entity()
export class ContractorApplication extends Model {
  @Column({
    nullable: false,
  })
  contractorId: string;

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

  @ManyToOne((type)=>Contractor,(ca)=>ca.cars)
  contractor:Contractor
}
