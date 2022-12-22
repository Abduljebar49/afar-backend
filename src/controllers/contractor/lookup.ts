import { AppDataSource } from "../../data-source";
import { AppliedFor } from "../../entity/LUAppliedFor";
import { Competency } from "../../entity/LUCompetency";
import { ConstructionLevel } from "../../entity/LUConstructionLevel";
import { ContractionType } from "../../entity/LUConstructionTypes";
import { PropertyType } from "../../entity/LUProperty";

export async function getAppleidFor(req, res) {
  try {
    const repo = AppDataSource.getRepository(AppliedFor);
    const data = await repo.find();
    res.json(data);
  } catch (er) {
    console.log("er : ", er);
    res.send({
      message: "there was problem getting appleid for list",
      error: er,
    });
  }
}

export async function postAppleidFor(req, res) {
  try {
    const name = req.body.name;
    if (!name) {
      res.send({
        message: "name required",
        error: {},
      });
    }
    const repo = AppDataSource.getRepository(AppliedFor);
    const data = await repo.save({ name: name });
    res.json({ data: data, message: "Successfully Saved!" });
  } catch (er) {
    console.log("er : ", er);
    res.send({
      message: "there was problem getting appleid for list",
      error: er,
    });
  }
}

export async function deleteAppleidFor(req, res) {
  try {
    const id = req.params.id;
    if (!id) {
      res.send({
        message: "id required",
        error: {},
      });
    }
    const repo = AppDataSource.getRepository(AppliedFor);
    const data = await repo
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id: id })
      .execute();
    res.json({ data: data, message: "Successfully Deleted!" });
  } catch (er) {
    console.log("er : ", er);
    res.send({
      message: "there was problem getting appleid for list",
      error: er,
    });
  }
}

export async function getCompetences(req, res) {
  try {
    const repo = AppDataSource.getRepository(Competency);
    const data = await repo.find();
    res.json(data);
  } catch (er) {
    console.log("er : ", er);
    res.send({
      message: "there was problem getting appleid for list",
      error: er,
    });
  }
}

export async function postCompetences(req, res) {
  try {
    const name = req.body.name;
    if (!name) {
      res.send({
        message: "name required",
        error: {},
      });
    }
    const repo = AppDataSource.getRepository(Competency);
    const data = await repo.save({ name: name });
    res.json({ data: data, message: "Successfully Saved!" });
  } catch (er) {
    console.log("er : ", er);
    res.send({
      message: "there was problem getting appleid for list",
      error: er,
    });
  }
}

export async function deleteCompetences(req, res) {
  try {
    const id = req.params.id;
    if (!id) {
      res.send({
        message: "id required",
        error: {},
      });
    }
    const repo = AppDataSource.getRepository(Competency);
    const data = await repo
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id: id })
      .execute();
    res.json({ data: data, message: "Successfully Deleted!" });
  } catch (er) {
    console.log("er : ", er);
    res.send({
      message: "there was problem getting appleid for list",
      error: er,
    });
  }
}

export async function getConstructionType(req, res) {
  try {
    const repo = AppDataSource.getRepository(ContractionType);
    const data = await repo.find();
    res.json(data);
  } catch (er) {
    console.log("er : ", er);
    res.send({
      message: "there was problem getting appleid for list",
      error: er,
    });
  }
}

export async function postConstructionType(req, res) {
  try {
    const name = req.body.name;
    if (!name) {
      res.send({
        message: "name required",
        error: {},
      });
    }
    const repo = AppDataSource.getRepository(ContractionType);
    const data = await repo.save({ name: name });
    res.json({ data: data, message: "Successfully Saved!" });
  } catch (er) {
    console.log("er : ", er);
    res.send({
      message: "there was problem getting appleid for list",
      error: er,
    });
  }
}

export async function deleteConstructionType(req, res) {
  try {
    const id = req.params.id;
    if (!id) {
      res.send({
        message: "id required",
        error: {},
      });
    }
    const repo = AppDataSource.getRepository(ContractionType);
    const data = await repo
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id: id })
      .execute();
    res.json({ data: data, message: "Successfully Deleted!" });
  } catch (er) {
    console.log("er : ", er);
    res.send({
      message: "there was problem getting appleid for list",
      error: er,
    });
  }
}

export async function getConstructionLevel(req, res) {
  try {
    const repo = AppDataSource.getRepository(ConstructionLevel);
    const data = await repo.find();
    res.json(data);
  } catch (er) {
    console.log("er : ", er);
    res.send({
      message: "there was problem getting appleid for list",
      error: er,
    });
  }
}

export async function postConstructionLevel(req, res) {
  try {
    const level = req.body.level;
    if (!level) {
      res.send({
        message: "level required",
        error: {},
      });
    }
    const repo = AppDataSource.getRepository(ConstructionLevel);
    const data = await repo.save({ level: level });
    res.json({ data: data, message: "Successfully Saved!" });
  } catch (er) {
    console.log("er : ", er);
    res.send({
      message: "there was problem getting appleid for list",
      error: er,
    });
  }
}

export async function deleteConstructionLevel(req, res) {
  try {
    const id = req.params.id;
    if (!id) {
      res.send({
        message: "id required",
        error: {},
      });
    }
    const repo = AppDataSource.getRepository(ConstructionLevel);
    const data = await repo
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id: id })
      .execute();
    res.json({ data: data, message: "Successfully Deleted!" });
  } catch (er) {
    console.log("er : ", er);
    res.send({
      message: "there was problem getting appleid for list",
      error: er,
    });
  }
}

export async function getProperty(req, res) {
  try {
    const repo = AppDataSource.getRepository(PropertyType);
    const data = await repo.find();
    res.json(data);
  } catch (er) {
    console.log("er : ", er);
    res.send({
      message: "there was problem getting appleid for list",
      error: er,
    });
  }
}

export async function postProperty(req, res) {
  try {
    const name = req.body.name;
    if (!name) {
      res.send({
        message: "name required",
        error: {},
      });
    }
    const repo = AppDataSource.getRepository(PropertyType);
    const data = await repo.save({ name: name });
    res.json({ data: data, message: "Successfully Saved!" });
  } catch (er) {
    console.log("er : ", er);
    res.send({
      message: "there was problem getting appleid for list",
      error: er,
    });
  }
}

export async function deleteProperty(req, res) {
  try {
    const id = req.params.id;
    if (!id) {
      res.send({
        message: "id required",
        error: {},
      });
    }
    const repo = AppDataSource.getRepository(PropertyType);
    const data = await repo
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id: id })
      .execute();
    res.json({ data: data, message: "Successfully Deleted!" });
  } catch (er) {
    console.log("er : ", er);
    res.send({
      message: "there was problem getting appleid for list",
      error: er,
    });
  }
}
