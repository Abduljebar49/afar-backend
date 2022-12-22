import { AppDataSource } from "../../data-source";
import { ConsultantEmployee } from "../../entity/ConsultantEmployee";

export async function editEmployees(req, res) {
  try {
    const employees = req.body.employees;
    const conEmployeeRepo = AppDataSource.getRepository(ConsultantEmployee);
    if (!employees) {
      res.send({
        message: "employees required",
        error: {},
      });
    }
    var newemployees: any[] = [];
    employees.forEach((ele) => {
      newemployees.push({
        id: ele.id,
        idNumber: ele.idNumber,
        fullName: ele.fullName,
      });
    });
    const updatedData = await conEmployeeRepo.save(newemployees);
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

export async function newEmployees(req, res) {
  try {
    const employees = req.body.employees;
    const conEmployeeRepo = AppDataSource.getRepository(ConsultantEmployee);
    if (!employees) {
      res.send({
        message: "employees required",
        error: {},
      });
    }
    var newemployees: any[] = [];
    employees.forEach((ele) => {
      newemployees.push({
        consultantId: ele.consultantId,
        idNumber: ele.idNumber,
        fullName: ele.fullName,
      });
    });
    const updatedData = await conEmployeeRepo.save(newemployees);
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

export async function deleteEmployees(req, res) {
  try {
    const id = req.params.id;
    const conEmployeeRepo = AppDataSource.getRepository(ConsultantEmployee);

    const data = await conEmployeeRepo
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
