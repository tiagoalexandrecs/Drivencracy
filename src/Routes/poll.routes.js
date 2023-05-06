import { Router } from "express";
import pollSchema from "../Schemas/poll.schema.js";
import validateSchema from "../Middlewares/validateSchema.js";
import { createPoll, getPolls, getResult } from "../Controllers/poll.controllers.js";

const pollRouter= Router();

pollRouter.post("/poll", validateSchema(pollSchema), createPoll);

pollRouter.get("/poll", getPolls)

pollRouter.get("/poll/:id/result", getResult)

export default pollRouter;