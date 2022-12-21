import { AppDataSource } from "../../data-source";
import { ConsultantCarNew } from "../../entity/consultant/ConsultantCarNew";

export async function editCars(req, res) {
  try {
    const cars = req.body.cars;
    const conCarsRepo = AppDataSource.getRepository(ConsultantCarNew);
    if (!cars) {
      res.send({
        message: "cars required",
        error: {},
      });
    }
    var newCars:any = [];
    cars.forEach((ele) => {
      newCars.push({
        id: ele.id,
        model: ele.model,
        type: ele.type,
        libreNumber: ele.libreNumber,
        chassisNumber: ele.chassisNumber,
      });
    });
    const updatedData = await conCarsRepo.save(newCars);
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
export async function newCars(req, res) {
  try {
    const cars = req.body.cars;
    const conCarsRepo = AppDataSource.getRepository(ConsultantCarNew);
    if (!cars) {
      res.send({
        message: "cars required",
        error: {},
      });
    }
    var newCars:any = [];
    cars.forEach((ele) => {
      newCars.push({
        consultantId: ele.consultantId,
        model: ele.model,
        type: ele.type,
        libreNumber: ele.libreNumber,
        chassisNumber: ele.chassisNumber,
      });
    });
    const updatedData = await conCarsRepo.save(newCars);
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
export async function deleteCars(req, res) {
  try {
    const id = req.params.id;
    const conCarsRepo = AppDataSource.getRepository(ConsultantCarNew);

    const data = await conCarsRepo
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
