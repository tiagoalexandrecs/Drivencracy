import { Router } from "express";
import { authValidation } from "../Middlewares/authorization.js";
import validateSchema from "../Middlewares/validateSchema.js";
import { createPoll, getPolls, getResult } from "../Controllers/poll.controllers.js";

const pollRouter= Router();

pollRouter.post("/poll", validateSchema, createPoll);

pollRouter.get("/poll", getPolls)

pollRouter.get("/poll/:id/result", getResult)

export default pollRouter;