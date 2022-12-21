import * as express from "express";
import {
  deleteAppleidFor,
  deleteCompetences,
  deleteConstructionLevel,
  deleteConstructionType,
  deleteProperty,
  getAppleidFor,
  getCompetences,
  getConstructionLevel,
  getConstructionType,
  getProperty,
  postAppleidFor,
  postCompetences,
  postConstructionLevel,
  postConstructionType,
  postProperty,
} from "../controllers/lookup";

const lookUpRouter = express.Router();

const lookupApi = "/api/lookup";

lookUpRouter.get(`${lookupApi}/appleid-for`, getAppleidFor);
lookUpRouter.post(`${lookupApi}/appleid-for`, postAppleidFor);
lookUpRouter.delete(`${lookupApi}/appleid-for/:id`, deleteAppleidFor);

lookUpRouter.get(`${lookupApi}/competency`, getCompetences);
lookUpRouter.post(`${lookupApi}/competency`, postCompetences);
lookUpRouter.delete(`${lookupApi}/competency/:id`, deleteCompetences);

lookUpRouter.get(`${lookupApi}/contruction-type`, getConstructionType);
lookUpRouter.post(`${lookupApi}/contruction-type`, postConstructionType);
lookUpRouter.delete(
  `${lookupApi}/contruction-type/:id`,
  deleteConstructionType
);

lookUpRouter.get(`${lookupApi}/contruction-level`, getConstructionLevel);
lookUpRouter.post(`${lookupApi}/contruction-level`, postConstructionLevel);
lookUpRouter.delete(
  `${lookupApi}/contruction-level/:id`,
  deleteConstructionLevel
);

lookUpRouter.get(`${lookupApi}/property`, getProperty);
lookUpRouter.post(`${lookupApi}/property`, postProperty);
lookUpRouter.delete(`${lookupApi}/property/:id`, deleteProperty);

export { lookUpRouter };
