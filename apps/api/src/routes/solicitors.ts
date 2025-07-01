import { Router } from 'express';
import solicitors from '../data/solicitors.json';

const router = Router();

router.get('/', (req, res) => {
  res.json(solicitors);
});

export default router;
