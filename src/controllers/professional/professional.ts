import { createQueryBuilder } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Professional } from "../../entity/Professional";
import { ProfessionalApplication } from "../../entity/ProfessionalApplication";
import { ProfessionalEducation } from "../../entity/ProfessionalEducation";
import { ProfessionalEmployment } from "../../entity/ProfessionalEmployment";

export async function saveProfessional(req, res) {
  const proRepository = AppDataSource.getRepository(Professional);
  const proApplicationRepo = AppDataSource.getRepository(
    ProfessionalApplication
  );
  const proEducationRepo = AppDataSource.getRepository(ProfessionalEducation);
  const proEmploymentRepo = AppDataSource.getRepository(ProfessionalEmployment);

  try {
    const body: any = req.body;

    const educations = body.educations;
    const employments = body.employments;

    delete body.educations;
    delete body.employments;

    const data = await proRepository.save(body);
    const applicationBody = {
      appliedForId: body.appliedForId,
      remark: body.remark ?? "",
      professionalId: data.id,
      validYear: body.validYear,
      registeredNo: body.registeredNo,
      issuedDate: body.issuedDate,
    };
    const conAppData = await proApplicationRepo.save(applicationBody);
    data.constractionApplication = conAppData;

    if (educations) {
      try {
        var educationsObj: any = [];
        educations.forEach((ele) => {
          var temp = {
            professionalId: data.id,
            educationalInstitute: ele.educationalInstitute,
            fieldOfStudy: ele.fieldOfStudy,
            professionalTitle: ele.professionalTitle,
            dateReceived: ele.dateReceived,
            educationFile: ele.educationFile,
          };
          educationsObj.push(temp);
        });
        // console.log("educationsObj : ",educationsObj);
        await proEducationRepo.save(educationsObj);
        data.educations = educationsObj;
      } catch (er) {}
    }

    if (employments) {
      try {
        var employmentsObj: any = [];

        employments.forEach((ele) => {
          employmentsObj.push({
            professionalId: data.id,
            employer: ele.employer,
            startDate: ele.startDate,
            endDate: ele.endDate,
            employmentFile: ele.employmentFile,
          });
        });
        await proEmploymentRepo.save(employmentsObj);
        data.employments = employmentsObj;
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

export async function getAllProfessional(req, res) {
  try {
    const conRepository = AppDataSource.getRepository(Professional);
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

export async function getWithStatusProfessional(req, res) {
  try {
    const status = req.params.status;
    if (!status) {
      res.send({ message: "status required", error: "error" });
    }
    const conRepository = AppDataSource.getRepository(Professional);
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

export async function getWithIdProfessional(req, res) {
  try {
    const id = req.params.id;
    if (!id) {
      res.send({ message: "No ID has given", error: "error" });
    }
    const proRepository = AppDataSource.getRepository(Professional);
    const proApplicationRepo = AppDataSource.getRepository(
      ProfessionalApplication
    );
    const proEducationRepo = AppDataSource.getRepository(ProfessionalEducation);
    const proEmploymentRepo = AppDataSource.getRepository(
      ProfessionalEmployment
    );

    const data = await proRepository
      .createQueryBuilder("contractor")
      .where("contractor.id = :id", { id })
      .getOne();
    if (data) {
      const educations = await proEducationRepo.find({
        where: { professionalId: id },
      });
      const employments = await proEmploymentRepo.find({
        where: { professionalId: id },
      });

      const professionalApplications = await proApplicationRepo.find({
        where: { professionalId: id },
      });
      data.educations = educations;
      data.employments = employments;
      data.ProfessionalApplications = professionalApplications;

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
