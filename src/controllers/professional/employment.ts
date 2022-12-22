import { AppDataSource } from "../../data-source";
import { ProfessionalEmployment } from "../../entity/ProfessionalEmployment";

export async function editEmployment(req, res) {
  try {
    const projects = req.body.projects;
    const conProjectRepo = AppDataSource.getRepository(ProfessionalEmployment);
    if (!projects) {
      res.send({
        message: "employment required",
        error: {},
      });
    }
    var newProjects = [];
    projects.forEach((ele) => {
      newProjects.push({
        id: ele.id,
        employer: ele.employer,
        startDate: ele.startDate,
        endDate: ele.endDate,
        employmentFile: ele.employmentFile,
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

export async function newEmployment(req, res) {
  try {
    const projects = req.body.projects;
    const conProjectRepo = AppDataSource.getRepository(ProfessionalEmployment);
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
        employer: ele.employer,
        startDate: ele.startDate,
        endDate: ele.endDate,
        employmentFile: ele.employmentFile,
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

export async function deleteEmployment(req, res) {
  try {
    const id = req.params.id;
    const conProjectRepo = AppDataSource.getRepository(ProfessionalEmployment);

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
