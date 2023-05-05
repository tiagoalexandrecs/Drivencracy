import { Router } from "express";
import { authValidation } from "../Middlewares/authorization.js";
import choiceSchema from "../Schemas/choice.schema.js";
import { postChoice , getChoices, postVote} from "../Controllers/choice.controllers.js";

const choiceRouter= Router();

choiceRouter.post("/choice", validateSchema(choiceSchema), postChoice);

choiceRouter.get("/poll/:id/choice", getChoices);

choiceRouter.post("/choice/:id/vote", postVote)