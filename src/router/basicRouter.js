import express from "express";
import routes from "../routes";
import {
  homeController,
  writeController,
  writeControllerPost,
  deleteControllerPost
} from "../Controller/basicController";

const basicRouter = express.Router();

basicRouter.get(routes.home, homeController);
basicRouter.get(routes.write, writeController);
basicRouter.post(routes.write, writeControllerPost);
basicRouter.post(routes.delete, deleteControllerPost);

export default basicRouter;
