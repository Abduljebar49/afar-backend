import { createQueryBuilder } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contractor } from "../../entity/Contractor";
import {
  ContractorApplication,
} from "../../entity/ContractorApplication";
import { ContractorCar } from "../../entity/ContractorCar";
import { ContractionProperty } from "../../entity/ContractorConstructionPropery";
import { ContractorEmployee } from "../../entity/ContractorEmployee";
import { ContractorProject } from "../../entity/ContractorProject";
import { ContractorService } from "../../entity/ContractorService";
import { ContractorShareHolder } from "../../entity/ContractorShareholder";
// import { createContractor } from "../../services/contractor";

export async function saveContractor(req, res) {
  const conRepository = AppDataSource.getRepository(Contractor);
  const conApplicationRepo = AppDataSource.getRepository(ContractorApplication);
  const conCarsRepo = AppDataSource.getRepository(ContractorCar);
  const conEmployeeRepo = AppDataSource.getRepository(ContractorEmployee);
  const conProjectRepo = AppDataSource.getRepository(ContractorProject);
  const conShareHoderRepo = AppDataSource.getRepository(ContractorShareHolder);
  const conEquipmentRepo = AppDataSource.getRepository(ContractionProperty);

  try {
    const body: any = req.body;

    const cars = body.cars;
    const employees = body.employees;
    const projects = body.projects;
    const shareholders = body.shareholders;
    const equipments = body.equipments;

    delete body.cars;
    delete body.employees;
    delete body.projects;
    delete body.shareholders;
    delete body.equipments;

    const data: any = await conRepository.save(body);
    const applicationBody = {
      contractorId: data.id,
      appliedForId: data.appliedForId,
      serviceType: data.constructionTypeId,
      serviceLevel: data.constructionLevelId,
      recordRemark: data.remark ?? "",
    };
    const conAppData = await conApplicationRepo.save(applicationBody);
    data.constractionApplication = conAppData;

    if (cars) {
      try {
        var carsObj:any = [];
        cars.forEach((ele) => {
          var temp = {
            contractorId: data.id,
            model: ele.model,
            type: ele.type,
            libreNumber: ele.libreNumber,
            chassisNumber: ele.chassisNumber,
          };
          carsObj.push(temp);
        });
        console.log("carsObj : ",carsObj);
        await conCarsRepo.save(carsObj);
        data.cars = carsObj;
      } catch (er) {}
    }

    if (employees) {
      try {
        var employeeObj:any = [];

        employees.forEach((ele) => {
          employeeObj.push({
            contractorId: data.id,
            idNumber: ele.idNumber ?? "",
            fullName: ele.fullName ?? "",
          });
        });
        await conEmployeeRepo.save(employeeObj);
        data.employees = employeeObj;
      } catch (er) {}
    }

    if (projects) {
      try {
        var projectsObj:any = [];

        projects.forEach((ele) => {
          projectsObj.push({
            contractorId: data.id,
            projectName: ele.projectName ?? "",
            projectValue: ele.projectValue ?? "",
            projectStatus: ele.projectStatus ?? "",
          });
        });
        await conProjectRepo.save(projectsObj);
        data.projects = projectsObj;
      } catch (er) {}
    }

    if (shareholders) {
      try {
        var shareholdersObj:any = [];

        shareholders.forEach((ele) => {
          shareholdersObj.push({
            contractorId: data.id,
            name: ele.shareholders ?? "",
            amount: ele.shareAmount ?? "",
          });
        });
        await conShareHoderRepo.save(shareholdersObj);
        data.shareholders = shareholdersObj;
      } catch (er) {}
    }

    if (equipments) {
      try {
        var equipmentsObj:any = [];

        equipments.forEach((ele) => {
          equipmentsObj.push({
            contractorId: data.id,
            propertyId: ele.propertyTypeId ?? 0,
            capacity: ele.capacity ?? "",
            manufacturedDate: ele.manufacturedDate,
          });
        });
        await conEquipmentRepo.save(equipmentsObj);
        data.equipments = equipmentsObj;
      } catch (er) {}
    }

    res.send({
      statusCode: 200,
      message: "Successfully saved!",
      data: data,
    });
  } catch (er) {
    console.log("er ; ", er);
    res.send({
      statusCode: 402,
      message: "there was error",
      error: er,
    });
  }
}

export async function getAllContractor(req, res) {
  try {
    const conRepository = AppDataSource.getRepository(Contractor);
    const data = await conRepository.find();
    res.json(data);
  } catch (er) {
    console.log(er);
    res.send({
      message: "there is error saving data",
      error: er,
    });
  }
}

export async function getWithStatus(req, res) {
  try {
    const status = req.params.status;
    if (!status) {
      res.send({ message: "status required", error: "error" });
    }
    const conRepository = AppDataSource.getRepository(Contractor);
    const data = await conRepository.find({ where: { status: status } });
    res.json(data);
  } catch (er) {
    console.log(er);
    res.send({
      message: "there is error getting data",
      error: er,
    });
  }
}

export async function getWithId(req, res) {
  try {
    const id = req.params.id;
    if (!id) {
      res.send({ message: "No ID has given", error: "error" });
    }
    const conRepository = AppDataSource.getRepository(Contractor);
    const conApplicationRepo = AppDataSource.getRepository(ContractorApplication);
    const conCarsRepo = AppDataSource.getRepository(ContractorCar);
    const conEmployeeRepo = AppDataSource.getRepository(ContractorEmployee);
    const conProjectRepo = AppDataSource.getRepository(ContractorProject);
    const conShareHoderRepo = AppDataSource.getRepository(ContractorShareHolder);
    const conEquipmentRepo = AppDataSource.getRepository(ContractionProperty);
  
      const data = await conRepository
        .createQueryBuilder("contractor")
        .where("contractor.id = :id", { id })
        .getOne();
    if(data){
      const cars = await conCarsRepo.find({where:{contractorId:id}});
      const employees =await conEmployeeRepo.find({where:{contractorId:id}});
      const projects =await conProjectRepo.find({where:{contractorId:id}});
      const shareholders =await conShareHoderRepo.find({where:{contractorId:id}});
      const equipments =await conEquipmentRepo.find({where:{contractorId:id}});
      const contractorApplications =await conApplicationRepo.find({where:{contractorId:id}});
      data.cars = cars;
      data.employees = employees;
      data.projects = projects;
      data.shareholders = shareholders;
      data.equipments = equipments;
      data.contractorApplications = contractorApplications;
  
      // const data = await conRepository
      //   .createQueryBuilder("contractor")
      //   .where("contractor.id = :id", { id })
      //   .getOne();
  
      res.send(data);
    }else{
      res.send({
        message:"No record with given ID",
        error:{}
      })
    }
  } catch (er) {
    console.log(er);
    res.send({
      message: "there is error getting data",
      error: er,
    });
  }
}

// export class ContractorController {
//   private conRepository = AppDataSource.getRepository(Contractor);
//   private conApplicationRepo = AppDataSource.getRepository(
//     ContractorApplication
//   );
//   private conEmployeeRepo = AppDataSource.getRepository(ContractorEmployee);
//   private conShareHoderRepo = AppDataSource.getRepository(
//     ContractorShareHolder
//   );
//   private conServiceRepo = AppDataSource.getRepository(ContractorService);
//   private conProjectRepo = AppDataSource.getRepository(ContractorProject);

//   async all(req: Request, res: Response) {
//     return this.conRepository.find();
//   }

//   async save(req: Request, res: Response) {
//     try {
//       const body: any = req.body;
//       const data = await createContractor(body);
//       return {
//         statusCode: 200,
//         message: "Successfully saved!",
//         data: data,
//       };
//     } catch (er) {
//       return {
//         statusCode: 402,
//         message: "there was error",
//         error: er,
//       };
//     }
//   }
// }



export async function funcNameHere(req,res){
  try{

  } catch (er) {
    console.log(er);
    res.send({
      message: "there is error getting data",
      error: er,
    });
  }
}
// export const createPostHandler = async (
//     req: Request,
//     res: Response,
//     // next: NextFunction
//   ) => {
//     try {
//     //   const user = await findUserById(res.locals.user.id as string);

//     //   const post = await createPost(req.body, user!);

//     //   res.status(201).json({
//     //     status: 'success',
//     //     data: {
//     //       post,
//     //     },
//     //   });
//     } catch (err: any) {
//       if (err.code === '23505') {
//         return res.status(409).json({
//           status: 'fail',
//           message: 'Post with that title already exist',
//         });
//       }
//     //   next(err);
//     }
//   };
