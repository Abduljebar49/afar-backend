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

//project api
router.post(`${conApi}/projects/edit`, editProjects);
router.post(`${conApi}/projects/new`, newProjects);
router.delete(`${conApi}/projects/delete/:id`, deleteProjects);

//property api
router.post(`${conApi}/property/edit`, editProperty);
router.post(`${conApi}/property/new`, newProperty);
router.delete(`${conApi}/property/delete/:id`, deleteProperty);

//shareholders api
router.post(`${conApi}/shareholders/edit`, editShareholders);
router.post(`${conApi}/shareholders/new`, newShareholders);
router.delete(`${conApi}/shareholders/delete/:id`, deleteShareholders);

//employees api
router.post(`${conApi}/employees/edit`, editEmployees);
router.post(`${conApi}/employees/new`, newEmployees);
router.delete(`${conApi}/employees/delete/:id`, deleteEmployees);

// router.use(Consrouter);
export { router };