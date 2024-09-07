import { Router } from "express";
import * as tutorialController from "../../controllers/tutorialController";

const tutorialRouter = Router();

tutorialRouter.post("/flag/get", tutorialController.getTutorialFlag);
tutorialRouter.post("/flag/set", tutorialController.TutorialFlagSet);
tutorialRouter.post("/quest/start", tutorialController.TutorialQuestStart);
tutorialRouter.post("/quest/end", tutorialController.TutorialQuestEnd);

tutorialRouter.post("/step/up", tutorialController.stepUP);
tutorialRouter.post("/nyanken/list", tutorialController.nyankenList);
tutorialRouter.post("/nyanken/go", tutorialController.nyankenGo);


export default tutorialRouter;
