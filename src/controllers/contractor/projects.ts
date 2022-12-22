import { AppDataSource } from "../../data-source";
import { ContractorProject } from "../../entity/ContractorProject";

export async function editProjects(req, res) {
  try {
    const projects = req.body.projects;
    const conProjectRepo = AppDataSource.getRepository(ContractorProject);
    if (!projects) {
      res.send({
        message: "projects required",
        error: {},
      });
    }
    var newProjects = [];
    projects.forEach((ele) => {
      newProjects.push({
        id: ele.id,
        projectName: ele.projectName,
        projectValue: ele.projectValue,
        projectStatus: ele.projectStatus,
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

export async function newProjects(req, res) {
  try {
    const projects = req.body.projects;
    const conProjectRepo = AppDataSource.getRepository(ContractorProject);
    if (!projects) {
      res.send({
        message: "projects required",
        error: {},
      });
    }
    var newProjects = [];
    projects.forEach((ele) => {
      newProjects.push({
        contractorId: ele.contractorId,
        projectName: ele.projectName,
        projectValue: ele.projectValue,
        projectStatus: ele.projectStatus,
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

export async function deleteProjects(req, res) {
  try {
    const id = req.params.id;
    const conProjectRepo = AppDataSource.getRepository(ContractorProject);

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
