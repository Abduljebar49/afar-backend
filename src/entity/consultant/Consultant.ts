import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Model from "../Base";
import {  ConsultantApplication } from "./ConsultantApplication";
import { ConsultantCar } from "./ConsultantCar";
import { ConsultantContractionProperty } from "./ConsultantConstructionPropery";
import { ConsultantEmployee } from "./ConsultantEmployee";
import { ConsultantProject } from "./ConsultantProject";
import { ConsultantService } from "./ConsultantService";
import { ConsultantShareHolder } from "./ConsultantShareholder";
 enum applicationStatus {
  PENDING = "pending",
  APPROVED = "approved",
  PAID = "paid",
  SIGNED = "signed",
}
@Entity()
export class ConsultantEntity extends Model{
  @Column({ nullable: false })
  companyName: string;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ nullable: false })
  gender: string;

  @Column({ nullable: false })
  managerName: string;

  @Column()
  region: string;

  @Column()
  zone: string;

  @Column()
  city: string;

  @Column()
  subCity: string;

  @Column()
  kebele: string;

  @Column()
  photo: string;

  @Column()
  house_no: string;

  @Column()
  phoneNumber: string;

  @Column({ nullable: false })
  mobileNumber: string;

  @Column()
  faxNumber: string;

  @Column()
  email: string;

  @Column()
  nationality: string;

  @Column({
    type: "enum",
    enum: applicationStatus,
    default: applicationStatus.PENDING,
    nullable: false,
  })
  status: applicationStatus;

  @Column({ nullable: false })
  constructionLevelId: number;

  @Column({ nullable: false })
  constructionTypeId: number;


  @OneToMany((type) => ConsultantCar, (ca) => ca.consultantId)
  cars: ConsultantCar[];

  @OneToMany((type) => ConsultantApplication, (ca) => ca.consultantId)
  ConsultantApplications: ConsultantApplication[];

  @OneToMany((type) => ConsultantEmployee, (ca) => ca.consultantId)
  employees: ConsultantEmployee[];

  @OneToMany((type) => ConsultantContractionProperty, (ca) => ca.consultantId)
  equipments: ConsultantContractionProperty[];

  @OneToMany((_type) => ConsultantProject, (ca) => ca.consultantId)
  projects: ConsultantProject[];

  @OneToMany((type) => ConsultantService, (ca) => ca.consultantId)
  services: ConsultantService[];

  @OneToMany((type) => ConsultantShareHolder, (ca) => ca.consultantId)
  shareholders: ConsultantShareHolder[];
}