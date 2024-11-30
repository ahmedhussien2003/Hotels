import express from "express"
import { fetch ,create} from "../controller/tour-controller.js"

const route=express.Router();

route.get("/tours",fetch);
route.post("/create",create);

export default route;