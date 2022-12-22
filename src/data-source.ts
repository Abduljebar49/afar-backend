import "reflect-metadata";
import { DataSource } from "typeorm";
import { Consultant } from "./entity/Consultant";
import { ConsultantApplication } from "./entity/ConsultantApplication";
import { ConsultantCar } from "./entity/ConsultantCar";
import { ConsultantContractionProperty } from "./entity/ConsultantConstructionPropery";
import { ConsultantEmployee } from "./entity/ConsultantEmployee";
import { ConsultantProject } from "./entity/ConsultantProject";
import { ConsultantService } from "./entity/ConsultantService";
import { ConsultantShareHolder } from "./entity/ConsultantShareholder";
import { Contractor } from "./entity/Contractor";
import { ContractorApplication } from "./entity/ContractorApplication";
import { ContractorCar } from "./entity/ContractorCar";
import { ContractionProperty } from "./entity/ContractorConstructionPropery";
import { ContractorEmployee } from "./entity/ContractorEmployee";
import { ContractorProject } from "./entity/ContractorProject";
import { ContractorService } from "./entity/ContractorService";
import { ContractorShareHolder } from "./entity/ContractorShareholder";
import { AppliedFor } from "./entity/LUAppliedFor";
import { Competency } from "./entity/LUCompetency";
import { ConstructionLevel } from "./entity/LUConstructionLevel";
import { ContractionType } from "./entity/LUConstructionTypes";
import { PropertyType } from "./entity/LUProperty";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "afar-backend",
  synchronize: true,
  logging: false,
  entities: //[__dirname + '/**/*.entity.{js,ts}']
  [
    User,
    Contractor,
    ContractorApplication,
    ContractorCar,
    ContractorEmployee,
    ContractorProject,
    ContractorService,
    ContractorShareHolder,
    ContractionProperty,
    ConstructionLevel,
    AppliedFor,
    ContractionType,
    PropertyType,
    Competency,
    Consultant,
    ConsultantCar,
    ConsultantApplication,
    ConsultantEmployee,
    ConsultantProject,
    ConsultantService,
    ConsultantShareHolder,
    ConsultantContractionProperty,
  ],
  migrations: [],
  subscribers: [],
});
