import { Router } from 'express';
import { searchPage } from './page-controller';

const router = Router();

router.get('/search/', searchPage);

export default router;
