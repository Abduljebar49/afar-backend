import { createQueryBuilder } from "typeorm";
import { AppDataSource } from "../../data-source";
import { ConsultantEntity } from "../../entity/consultant/Consultant";
import { ConsultantApplication } from "../../entity/consultant/ConsultantApplication";
import { ConsultantCar } from "../../entity/Consultant/ConsultantCar";
import { ConsultantCarNew } from "../../entity/consultant/ConsultantCarNew";
// import { ConsultantCar } from "../../entity/Consultant/ConsultantCar";
import { ConsultantContractionProperty } from "../../entity/Consultant/ConsultantConstructionPropery";
import { ConsultantContractionPropertyNew } from "../../entity/Consultant/ConsultantConstructionProperyNew";
import { ConsultantEmployee } from "../../entity/Consultant/ConsultantEmployee";
import { ConsultantEmployeeNew } from "../../entity/consultant/ConsultantEmployeeNew";
import { ConsultantProject } from "../../entity/Consultant/ConsultantProject";
import { ConsultantProjectNew } from "../../entity/consultant/ConsultantProjectNew";
import { ConsultantShareHolder } from "../../entity/Consultant/ConsultantShareholder";
import { ConsultantShareHolderNew } from "../../entity/consultant/ConsultantShareholderNew";

export async function saveConsultant(req, res) {
  const conRepository = AppDataSource.getRepository(ConsultantEntity);
  const conApplicationRepo = AppDataSource.getRepository(ConsultantApplication);
  const conCarsRepo = AppDataSource.getRepository(ConsultantCarNew);
  const conEmployeeRepo = AppDataSource.getRepository(ConsultantEmployeeNew);
  const conProjectRepo = AppDataSource.getRepository(ConsultantProjectNew);
  const conShareHoderRepo = AppDataSource.getRepository(ConsultantShareHolderNew);
  const conEquipmentRepo = AppDataSource.getRepository(
    ConsultantContractionPropertyNew
  );
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
      consultantId: data.id,
      appliedForId: data.appliedForId,
      serviceType: data.constructionTypeId,
      serviceLevel: data.constructionLevelId,
      recordRemark: data.remark ?? "",
    };

    const conAppData = await conApplicationRepo.save(applicationBody);
    data.constractionApplication = conAppData;

    if (cars) {
      try {
        var carsObj: any = [];
        cars.forEach((ele) => {
          var temp = {
            consultantId: data.id,
            model: ele.model,
            type: ele.type,
            libreNumber: ele.libreNumber,
            chassisNumber: ele.chassisNumber,
          };
          carsObj.push(temp);
        });
        await conCarsRepo.save(carsObj);
        data.cars = carsObj;
      } catch (er) {
        console.log("error : ",er);
      }
    }

    if (employees) {
      try {
        var employeeObj: any = [];

        employees.forEach((ele) => {
          employeeObj.push({
            consultantId: data.id,
            idNumber: ele.idNumber ?? "",
            fullName: ele.fullName ?? "",
          });
        });
        await conEmployeeRepo.save(employeeObj);
        data.employees = employeeObj;
      } catch (er) {
        console.log("error : ",er);
      }
    }

    if (projects) {
      try {
        var projectsObj: any = [];

        projects.forEach((ele) => {
          projectsObj.push({
            consultantId: data.id,
            projectName: ele.projectName ?? "",
            projectValue: ele.projectValue ?? "",
            projectStatus: ele.projectStatus ?? "",
          });
        });
        await conProjectRepo.save(projectsObj);
        data.projects = projectsObj;
      } catch (er) {
        console.log("error : ",er);
      }
    }

    if (shareholders) {
      try {
        var shareholdersObj: any = [];

        shareholders.forEach((ele) => {
          shareholdersObj.push({
            consultantId: data.id,
            name: ele.shareholders ?? "",
            amount: ele.shareAmount ?? "",
          });
        });
        await conShareHoderRepo.save(shareholdersObj);
        data.shareholders = shareholdersObj;
      } catch (er) {
        console.log("error : ",er);
      }
    }

    if (equipments) {
      try {
        var equipmentsObj: any = [];

        equipments.forEach((ele) => {
          equipmentsObj.push({
            consultantId: data.id,
            propertyId: ele.propertyTypeId ?? 0,
            capacity: ele.capacity ?? "",
            manufacturedDate: ele.manufacturedDate??new Date(),
          });
        });
        console.log("equimpment : ",equipmentsObj)
        await conEquipmentRepo.save(equipmentsObj);
        data.equipments = equipmentsObj;
      } catch (er) {
        console.log("error : ",er);
      }
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

export async function getAllConsultant(req, res) {
  try {
    const conRepository = AppDataSource.getRepository(ConsultantEntity);
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
    const conRepository = AppDataSource.getRepository(ConsultantEntity);
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
    const conRepository = AppDataSource.getRepository(ConsultantEntity);
    const conApplicationRepo = AppDataSource.getRepository(
      ConsultantApplication
    );
    const conCarsRepo = AppDataSource.getRepository(ConsultantCar);
    const conEmployeeRepo = AppDataSource.getRepository(ConsultantEmployee);
    const conProjectRepo = AppDataSource.getRepository(ConsultantProject);
    const conShareHoderRepo = AppDataSource.getRepository(
      ConsultantShareHolder
    );
    const conEquipmentRepo = AppDataSource.getRepository(
      ConsultantContractionProperty
    );

    const data = await conRepository
      .createQueryBuilder("Consultant")
      .where("Consultant.id = :id", { id })
      .getOne();
    if (data) {
      const cars = await conCarsRepo.find({ where: { consultantId: id } });
      const employees = await conEmployeeRepo.find({
        where: { consultantId: id },
      });
      const projects = await conProjectRepo.find({
        where: { consultantId: id },
      });
      const shareholders = await conShareHoderRepo.find({
        where: { consultantId: id },
      });
      const equipments = await conEquipmentRepo.find({
        where: { consultantId: id },
      });
      const ConsultantApplications = await conApplicationRepo.find({
        where: { consultantId: id },
      });
      data.cars = cars;
      data.employees = employees;
      data.projects = projects;
      data.shareholders = shareholders;
      data.equipments = equipments;
      data.ConsultantApplications = ConsultantApplications;

      // const data = await conRepository
      //   .createQueryBuilder("Consultant")
      //   .where("Consultant.id = :id", { id })
      //   .getOne();

      res.send(data);
    } else {
      res.send({
        message: "No record with given ID",
        error: {},
      });
    }
  } catch (er) {
    console.log(er);
    res.send({
      message: "there is error getting data",
      error: er,
    });
  }
}

// export class ConsultantController {
//   private conRepository = AppDataSource.getRepository(ConsultantEntity);
//   private conApplicationRepo = AppDataSource.getRepository(
//     ConsultantApplication
//   );
//   private conEmployeeRepo = AppDataSource.getRepository(ConsultantEmployee);
//   private conShareHoderRepo = AppDataSource.getRepository(
//     ConsultantShareHolder
//   );
//   private conServiceRepo = AppDataSource.getRepository(ConsultantService);
//   private conProjectRepo = AppDataSource.getRepository(ConsultantProject);

//   async all(req: Request, res: Response) {
//     return this.conRepository.find();
//   }

//   async save(req: Request, res: Response) {
//     try {
//       const body: any = req.body;
//       const data = await createConsultant(body);
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

export async function funcNameHere(req, res) {
  try {
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
