import { Router } from "express";
import { getServers, joinServer } from "../controllers/serverController.js";

const router = Router();


router.get("/server", getServers)
router.post("/api/servers/:serverId/join", joinServer);

export default router;