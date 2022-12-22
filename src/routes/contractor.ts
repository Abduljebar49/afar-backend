import {
  getAllContractor,
  getWithId,
  getWithStatus,
  saveContractor,
} from "../controllers/contractor/constractor";
import * as express from "express";
import { deleteCars, editCars, newCars } from "../controllers/contractor/cars";
import {
  deleteProjects,
  editProjects,
  newProjects,
} from "../controllers/contractor/projects";
import {
  deleteProperty,
  editProperty,
  newProperty,
} from "../controllers/contractor/property";
import {
  deleteShareholders,
  editShareholders,
  newShareholders,
} from "../controllers/contractor/shareholders";
import {
  deleteEmployees,
  editEmployees,
  newEmployees,
} from "../controllers/contractor/employees";
import { getAllConsultant, getWithIdConsultant, getWithStatusConsultant, saveConsultant } from "../controllers/consultant/constractor";
import { deleteCarsC, editCarsC, newCarsC } from "../controllers/consultant/cars";
import { deleteProjectsC, editProjectsC, newProjectsC } from "../controllers/consultant/projects";
import { deletePropertyC, editPropertyC, newPropertyC } from "../controllers/consultant/property";
import { deleteShareholdersC, editShareholdersC, newShareholdersC } from "../controllers/consultant/shareholders";
import { deleteEmployeesC, editEmployeesC, newEmployeesC } from "../controllers/consultant/employees";

const router = express.Router();

const conApi = "/api/contractor";
const consApi = "/api/consultant";
//basics of contractor
router.get(conApi, getAllContractor);
router.get(`${conApi}/:id`, getWithId);
router.post(`${conApi}`, saveContractor);
router.get(`${conApi}/status/:status`, getWithStatus);

router.get(consApi, getAllConsultant);
router.get(`${consApi}/:id`, getWithIdConsultant);
router.post(`${consApi}`, saveConsultant);
router.get(`${consApi}/status/:status`, getWithStatusConsultant);

//car api
router.post(`${conApi}/cars/edit`, editCars);
router.post(`${conApi}/cars/new`, newCars);
router.delete(`${conApi}/cars/delete/:id`, deleteCars);

//Consultant car api
router.post(`${consApi}/cars/edit`, editCarsC);
router.post(`${consApi}/cars/new`, newCarsC);
router.delete(`${consApi}/cars/delete/:id`, deleteCarsC);

//contractor project api
router.post(`${conApi}/projects/edit`, editProjects);
router.post(`${conApi}/projects/new`, newProjects);
router.delete(`${conApi}/projects/delete/:id`, deleteProjects);

//consultant project api
router.post(`${consApi}/projects/edit`, editProjectsC);
router.post(`${consApi}/projects/new`, newProjectsC);
router.delete(`${consApi}/projects/delete/:id`, deleteProjectsC);

//contractor property api
router.post(`${conApi}/property/edit`, editProperty);
router.post(`${conApi}/property/new`, newProperty);
router.delete(`${conApi}/property/delete/:id`, deleteProperty);

// consultant property api
router.post(`${consApi}/property/edit`, editPropertyC);
router.post(`${consApi}/property/new`, newPropertyC);
router.delete(`${consApi}/property/delete/:id`, deletePropertyC);

// contractor shareholders api
router.post(`${conApi}/shareholders/edit`, editShareholders);
router.post(`${conApi}/shareholders/new`, newShareholders);
router.delete(`${conApi}/shareholders/delete/:id`, deleteShareholders);


// consultant shareholders api
router.post(`${consApi}/shareholders/edit`, editShareholdersC);
router.post(`${consApi}/shareholders/new`, newShareholdersC);
router.delete(`${consApi}/shareholders/delete/:id`, deleteShareholdersC);

//contractor employees api
router.post(`${conApi}/employees/edit`, editEmployees);
router.post(`${conApi}/employees/new`, newEmployees);
router.delete(`${conApi}/employees/delete/:id`, deleteEmployees);

//consultant employees api
router.post(`${consApi}/employees/edit`, editEmployeesC);
router.post(`${consApi}/employees/new`, newEmployeesC);
router.delete(`${consApi}/employees/delete/:id`, deleteEmployeesC);

// router.use(Consrouter);
export { router };