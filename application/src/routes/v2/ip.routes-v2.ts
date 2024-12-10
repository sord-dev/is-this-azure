import { Router } from 'express';
import { getPublicIPs } from '../../controllers/ip.controller-v2'
const router = Router();

router.get('/', getPublicIPs);

export default router;