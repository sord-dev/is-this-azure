import { Router } from 'express';
const router = Router();

import { default as ipRoutes } from './ip.routes-v1';
router.use('/ip', ipRoutes);

export default router;
