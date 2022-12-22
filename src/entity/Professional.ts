import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Model, { applicationStatus } from "./Base";
import { ProfessionalApplication } from "./ProfessionalApplication";
import { ProfessionalEducation } from "./ProfessionalEducation";
import { ProfessionalEmployment } from "./ProfessionalEmployment";

@Entity()
export class Professional extends Model {
  @Column()
  name: string;

  @Column()
  gender: string;

  @Column()
  city: string;

  @Column()
  woreda: string;

  @Column()
  kebele: string;

  @Column()
  houseNo: string;

  @Column()
  phoneNumber: string;

  @Column()
  professionalTitleId: number;

  @Column()
  competenceId: number;

  @Column()
  serialNo: string;

  @Column()
  qrCode: string;

  @Column()
  photo: string;

  @Column({
    type: "enum",
    enum: applicationStatus,
    default: applicationStatus.PENDING,
    nullable: false,
  })
  status: applicationStatus;

  @OneToMany((type) => ProfessionalApplication, (ca) => ca.professionalId)
  ProfessionalApplications: ProfessionalApplication[];
  @OneToMany((type) => ProfessionalEducation, (ca) => ca.professionalId)
  educations: ProfessionalEducation[];
  @OneToMany((type) => ProfessionalEmployment, (ca) => ca.professionalId)
  employments: ProfessionalEmployment[];
}
