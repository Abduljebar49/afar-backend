import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Model, { applicationStatus } from "./Base";
import { ConsultantApplication } from "./ConsultantApplication";
import { ConsultantCar } from "./ConsultantCar";
import { ConsultantProperty } from "./ConsultantPropery";
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

  @OneToMany((type) => ContractorEmployee, (ca) => ca.contractorId)
  employees: ContractorEmployee[];

  @OneToMany((type) => ConsultantProperty, (ca) => ca.consultantId)
  equipments: ConsultantProperty[];

  @OneToMany((type) => ContractorProject, (ca) => ca.contractorId)
  // @JoinColumn()
  projects: ContractorProject[];

  @OneToMany((type) => ContractorService, (ca) => ca.contractorId)
  // @JoinColumn()
  services: ContractorService[];

  @OneToMany((type) => ContractorShareHolder, (ca) => ca.contractorId)
  // @JoinColumn()
  shareholders: ContractorShareHolder[];
}



/*

@OneToMany(()=> EDC_VARIANT,(variant) => {variant.edcProd;},)
@JoinColumn({ referencedColumnName: 'edcProdId' })
variants: EDC_VARIANT[];


@ManyToOne(() => EDC_PRODUCT, (prod) => prod.variants)
@JoinColumn({ name: 'edcProdId' })
edcProd: EDC_PRODUCT;


*/


