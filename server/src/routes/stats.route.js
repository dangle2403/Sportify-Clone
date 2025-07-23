import { Router } from 'express';
import { getStats } from '../controllers/stats.controller.js';


const statsRouter = Router();

statsRouter.get("/", getStats)

export default statsRouter;