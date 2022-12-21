import {
  getAllConsultant,
  getWithId,
  getWithStatus,
  saveConsultant,
} from "../controllers/consultant/consultant";
import * as express from "express";
import { deleteCars, editCars, newCars } from "../controllers/consultant/cars";
import {
  deleteProjects,
  editProjects,
  newProjects,
} from "../controllers/consultant/projects";
import {
  deleteProperty,
  editProperty,
  newProperty,
} from "../controllers/consultant/property";
import {
  deleteShareholders,
  editShareholders,
  newShareholders,
} from "../controllers/consultant/shareholders";
import {
  deleteEmployees,
  editEmployees,
  newEmployees,
} from "../controllers/consultant/employees";

const Consrouter = express.Router();

const conApi = "/api/consultant";
//basics of contractor
Consrouter.get(conApi, getAllConsultant);
Consrouter.get(`${conApi}/:id`, getWithId);
Consrouter.post(`${conApi}`, saveConsultant);
Consrouter.get(`${conApi}/status/:status`, getWithStatus);

//car api
Consrouter.post(`${conApi}/cars/edit`, editCars);
Consrouter.post(`${conApi}/cars/new`, newCars);
Consrouter.delete(`${conApi}/cars/delete/:id`, deleteCars);

//project api
Consrouter.post(`${conApi}/projects/edit`, editProjects);
Consrouter.post(`${conApi}/projects/new`, newProjects);
Consrouter.delete(`${conApi}/projects/delete/:id`, deleteProjects);

//property api
Consrouter.post(`${conApi}/property/edit`, editProperty);
Consrouter.post(`${conApi}/property/new`, newProperty);
Consrouter.delete(`${conApi}/property/delete/:id`, deleteProperty);

//shareholders api
Consrouter.post(`${conApi}/shareholders/edit`, editShareholders);
Consrouter.post(`${conApi}/shareholders/new`, newShareholders);
Consrouter.delete(`${conApi}/shareholders/delete/:id`, deleteShareholders);

//employees api
Consrouter.post(`${conApi}/employees/edit`, editEmployees);
Consrouter.post(`${conApi}/employees/new`, newEmployees);
Consrouter.delete(`${conApi}/employees/delete/:id`, deleteEmployees);

export { Consrouter };