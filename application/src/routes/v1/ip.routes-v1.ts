import { getIps, getIpsByService, getServicesIndex, identifyIp } from '../../controllers/ip.controller-v1';
import { Router } from 'express';

const router = Router();

router.get('/services', getServicesIndex);
router.get('/services/:service', getIpsByService);
router.get('/', getIps);

router.get('/:ip', identifyIp);


export default router;