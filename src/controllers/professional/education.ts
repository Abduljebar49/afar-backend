import { AppDataSource } from "../../data-source";
import { ProfessionalEducation } from "../../entity/ProfessionalEducation";

export async function editEducation(req, res) {
  try {
    const projects = req.body.projects;
    const conProjectRepo = AppDataSource.getRepository(ProfessionalEducation);
    if (!projects) {
      res.send({
        message: "education required",
        error: {},
      });
    }
    var newProjects = [];
    projects.forEach((ele) => {
      newProjects.push({
        id: ele.id,
        educationalInstitute: ele.educationalInstitute,
        fieldOfStudy: ele.fieldOfStudy,
        professionalTitle: ele.professionalTitle,
        dateReceived: ele.dateReceived,
        educationFile: ele.educationFile,
      });
    });
    const updatedData = await conProjectRepo.save(newProjects);
    res.send({
      message: "Updated Successfully",
      data: updatedData,
    });
  } catch (er) {
    console.log(er);
    res.send({
      message: "there exist error updating data",
      error: er,
    });
  }
}

export async function newEducation(req, res) {
  try {
    const projects = req.body.projects;
    const conProjectRepo = AppDataSource.getRepository(ProfessionalEducation);
    if (!projects) {
      res.send({
        message: "projects required",
        error: {},
      });
    }
    var newProjects = [];
    projects.forEach((ele) => {
      newProjects.push({
        professionalId: ele.id,
        educationalInstitute: ele.educationalInstitute,
        fieldOfStudy: ele.fieldOfStudy,
        professionalTitle: ele.professionalTitle,
        dateReceived: ele.dateReceived,
        educationFile: ele.educationFile,
      });
    });
    const updatedData = await conProjectRepo.save(newProjects);
    res.send({
      message: "Created Successfully",
      data: updatedData,
    });
  } catch (er) {
    console.log(er);
    res.send({
      message: "there exist error creating data",
      error: er,
    });
  }
}

export async function deleteEducation(req, res) {
  try {
    const id = req.params.id;
    const conProjectRepo = AppDataSource.getRepository(ProfessionalEducation);

    const data = await conProjectRepo
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id: id })
      .execute();
    res.send({
      message: "Deleted Successfully",
      data: data,
    });
  } catch (er) {
    console.log(er);
    res.send({
      message: "there is error getting data",
      error: er,
    });
  }
}
