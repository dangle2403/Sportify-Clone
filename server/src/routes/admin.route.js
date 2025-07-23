import { Router } from 'express';
import { protectRoute, requireAdmin } from '../middlewares/auth.middleware';


const adminRouter = Router();

adminRouter.get("/", protectRoute, requireAdmin);

export default adminRouter;