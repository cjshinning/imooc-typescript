import { Router, Request, Response } from 'express';
import Crawller from './crawller';
import JennyAnalyzer from './jennyAnalyzer';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('hello world !');
});

router.get('/getDate', (req: Request, res: Response) => {
  const secret = 'x3b174jsx';
  const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
  const analyzer = JennyAnalyzer.getInstance();
  new Crawller(url, analyzer);
  res.send('getData Success!');
});

export default router;
