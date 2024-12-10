import { Router } from 'express';
const router = Router();

import { default as ipRoutes } from './ip.routes-v2';
router.use('/ip', ipRoutes);

export default router;
