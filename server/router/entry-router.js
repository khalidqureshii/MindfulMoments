import express from "express";
import * as EntryControllers from "../controller/entry-controller.js";

const entryRouter = express.Router();

entryRouter.route("/newEntry").post(EntryControllers.newEntry);
entryRouter.route("/getEntries").post(EntryControllers.getEntries);
entryRouter.route("/deleteEntry").delete(EntryControllers.delEntry);

export default entryRouter;