import { AppDataSource } from "../../data-source";
import { ConsultantProjectNew } from "./../../../src/entity/Consultant/ConsultantProjectNew";

export async function editProjects(req, res) {
  try {
    const projects = req.body.projects;
    const conProjectRepo = AppDataSource.getRepository(ConsultantProjectNew);
    if (!projects) {
      res.send({
        message: "projects required",
        error: {},
      });
    }
    var newProjects: any[] = [];
    projects.forEach((ele) => {
      newProjects.push({
        id: ele.id,
        projectName: ele.projectName,
        projectValue: ele.projectValue,
        projectStatus: ele.projectStatus,
      });
    });
    console.log("repor  : ",await conProjectRepo.target.toString())
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

export async function newProjects(req, res) {
  try {
    const projects = req.body.projects;
    const conProjectRepo = AppDataSource.getRepository(ConsultantProjectNew);
    if (!projects) {
      res.send({
        message: "projects required",
        error: {},
      });
    }
    var newProjects: any[] = [];
    projects.forEach((ele) => {
      newProjects.push({
        consultantId: ele.consultantId,
        projectName: ele.projectName,
        projectValue: ele.projectValue,
        projectStatus: ele.projectStatus,
      });
    });
    const updatedData = await conProjectRepo.save(newProjects);
    res.send({
      message: "Created Successfully",
      data: projects,
    });
  } catch (er) {
    console.log(er);
    res.send({
      message: "there exist error creating data",
      error: er,
    });
  }
}

export async function deleteProjects(req, res) {
  try {
    const id = req.params.id;
    const conProjectRepo = AppDataSource.getRepository(ConsultantProjectNew);

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
