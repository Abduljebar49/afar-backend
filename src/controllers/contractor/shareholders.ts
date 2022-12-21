import { AppDataSource } from "../../data-source";
import { ContractorShareHolder } from "../../entity/contractor/ContractorShareholder";

export async function editShareholders(req, res) {
  try {
    const shareholders = req.body.shareholders;
    const conShareHoderRepo = AppDataSource.getRepository(
      ContractorShareHolder
    );
    if (!shareholders) {
      res.send({
        message: "Shareholders required",
        error: {},
      });
    }
    var newshareholders = [];
    shareholders.forEach((ele) => {
      newshareholders.push({
        id: ele.id,
        name: ele.shareholders,
        amount: ele.shareAmount,
      });
    });
    const updatedData = await conShareHoderRepo.save(newshareholders);
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
export async function newShareholders(req, res) {
  try {
    const shareholders = req.body.shareholders;
    const conShareHoderRepo = AppDataSource.getRepository(
      ContractorShareHolder
    );
    if (!shareholders) {
      res.send({
        message: "Shareholders required",
        error: {},
      });
    }
    var newshareholders = [];
    shareholders.forEach((ele) => {
      newshareholders.push({
        contractorId: ele.contractorId,
        name: ele.shareholders,
        amount: ele.shareAmount,
      });
    });
    const updatedData = await conShareHoderRepo.save(newshareholders);
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
export async function deleteShareholders(req, res) {
  try {
    const id = req.params.id;
    const conShareHoderRepo = AppDataSource.getRepository(
      ContractorShareHolder
    );

    const data = await conShareHoderRepo
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
