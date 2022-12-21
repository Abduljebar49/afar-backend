import "reflect-metadata";
import { DataSource } from "typeorm";
import { Contractor } from "./entity/contractor/Contractor";
import { ContractorApplication } from "./entity/contractor/ContractorApplication";
import { ContractorCar } from "./entity/contractor/ContractorCar";
import { ContractionProperty } from "./entity/contractor/ContractorConstructionPropery";
import { ContractorEmployee } from "./entity/contractor/ContractorEmployee";
import { ContractorProject } from "./entity/contractor/ContractorProject";
import { ContractorService } from "./entity/contractor/ContractorService";
import { ContractorShareHolder } from "./entity/contractor/ContractorShareholder";
import { AppliedFor } from "./entity/lookups/LUAppliedFor";
import { Competency } from "./entity/LUCompetency";
import { ConstructionLevel } from "./entity/lookups/LUConstructionLevel";
import { ContractionType } from "./entity/lookups/LUConstructionTypes";
import { PropertyType } from "./entity/lookups/LUProperty";
import { User } from "./entity/User";
import { ConsultantApplication } from "./entity/consultant/ConsultantApplication";
import { ConsultantCar } from "./entity/consultant/ConsultantCar";
import { ConsultantEmployee } from "./entity/consultant/ConsultantEmployee";
import { ConsultantProject } from "./entity/consultant/ConsultantProject";
import { ConsultantService } from "./entity/consultant/ConsultantService";
import { ConsultantShareHolder } from "./entity/consultant/ConsultantShareholder";
import { ConsultantContractionProperty} from './entity/consultant/ConsultantConstructionPropery';
import { ConsultantEntity } from "./entity/consultant/Consultant";
import { ConsultantCarNew } from "./entity/consultant/ConsultantCarNew";
import { ConsultantEmployeeNew } from "./entity/consultant/ConsultantEmployeeNew";
import { ConsultantProjectNew } from "./entity/consultant/ConsultantProjectNew";
import { ConsultantShareHolderNew } from "./entity/consultant/ConsultantShareholderNew";
import { ConsultantContractionPropertyNew } from "./entity/Consultant/ConsultantConstructionProperyNew";

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
    ConsultantCar,
    ConsultantCarNew,
    ConsultantEntity,
    ConsultantApplication,
    ConsultantEmployee,
    ConsultantEmployeeNew,
    ConsultantProject,
    ConsultantProjectNew,
    ConsultantService,
    ConsultantShareHolder,
    ConsultantShareHolderNew,
    ConsultantContractionProperty,
    ConsultantContractionPropertyNew,
    User,
    //contractor entities
    // Consultant,
    Contractor,
    ContractorApplication,
    ContractorCar,
    ContractorEmployee,
    ContractorProject,
    ContractorService,
    ContractorShareHolder,
    ContractionProperty,
    //consultants
    //lookup entities
    ConstructionLevel,
    AppliedFor,
    ContractionType,
    PropertyType,
    Competency,
  ],
  migrations: [],
  subscribers: [],
});
