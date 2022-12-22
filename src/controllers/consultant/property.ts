import { AppDataSource } from "../../data-source";
import { ConsultantProperty } from "../../entity/ConsultantPropery";

export async function editPropertyC(req, res) {
  try {
    const property = req.body.equipments;
    const conEquipmentRepo = AppDataSource.getRepository(ConsultantProperty);
    if (!property) {
      res.send({
        message: "Equipment required",
        error: {},
      });
    }
    var newproperty = [];
    property.forEach((ele) => {
      newproperty.push({
        id: ele.id,
        propertyId: ele.propertyId,
        capacity: ele.capacity,
        manufacturedDate: ele.manufacturedDate,
      });
    });
    const updatedData = await conEquipmentRepo.save(newproperty);
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
export async function newPropertyC(req, res) {
  try {
    const property = req.body.equipments;
    const conEquipmentRepo = AppDataSource.getRepository(ConsultantProperty);
    if (!property) {
      res.send({
        message: "Equipments required",
        error: {},
      });
    }
    var newproperty = [];
    property.forEach((ele) => {
      newproperty.push({
        consultantId: ele.consultantId,
        propertyId: ele.propertyId,
        capacity: ele.capacity,
        manufacturedDate: ele.manufacturedDate,
      });
    });
    const updatedData = await conEquipmentRepo.save(newproperty);
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
export async function deletePropertyC(req, res) {
  try {
    const id = req.params.id;
    const conEquipmentRepo = AppDataSource.getRepository(ConsultantProperty);

    const data = await conEquipmentRepo
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
