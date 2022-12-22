import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Model, { applicationStatus } from "./Base";
import { ConsultantApplication } from "./ConsultantApplication";
import { ConsultantCar } from "./ConsultantCar";
import { ConsultantEmployee } from "./ConsultantEmployee";
import { ConsultantProject } from "./ConsultantProject";
import { ConsultantProperty } from "./ConsultantPropery";
import { ConsultantService } from "./ConsultantService";
import { ConsultantShareHolder } from "./ConsultantShareholder";
// import { applicationStatus } from "../consultant/ConsultantApplication";
import {  ContractorApplication } from "./ContractorApplication";
import { ContractorCar } from "./ContractorCar";
import { ContractionProperty } from "./ContractorConstructionPropery";
import { ContractorEmployee } from "./ContractorEmployee";
import { ContractorProject } from "./ContractorProject";
import { ContractorService } from "./ContractorService";
import { ContractorShareHolder } from "./ContractorShareholder";

@Entity()
export class Consultant extends Model {
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


  @OneToMany((_type) => ConsultantCar, (ca) => ca.consultantId,{
    cascade:true
  })
  cars: ConsultantCar[];

  @OneToMany((type) => ConsultantApplication, (ca) => ca.consultantId)
  // @JoinColumn()
  consultantApplications: ConsultantApplication[];

  @OneToMany((type) => ConsultantEmployee, (ca) => ca.consultantId)
  employees: ConsultantEmployee[];

  @OneToMany((type) => ConsultantProperty, (ca) => ca.consultantId)
  equipments: ConsultantProperty[];

  @OneToMany((type) => ConsultantProject, (ca) => ca.consultantId)
  // @JoinColumn()
  projects: ConsultantProject[];

  @OneToMany((type) => ConsultantService, (ca) => ca.consultantId)
  // @JoinColumn()
  services: ConsultantService[];

  @OneToMany((type) => ConsultantShareHolder, (ca) => ca.consultantId)
  // @JoinColumn()
  shareholders: ConsultantShareHolder[];
}



/*

@OneToMany(()=> EDC_VARIANT,(variant) => {variant.edcProd;},)
@JoinColumn({ referencedColumnName: 'edcProdId' })
variants: EDC_VARIANT[];


@ManyToOne(() => EDC_PRODUCT, (prod) => prod.variants)
@JoinColumn({ name: 'edcProdId' })
edcProd: EDC_PRODUCT;


*/


