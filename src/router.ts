import { Router, Request, Response } from 'express';
import Crawller from './crawller';
import JennyAnalyzer from './jennyAnalyzer';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send(`
    <html>
      <body>
        <form method="post" action="/getDate">
          <input type="password" name="password" />
          <button>提交</button>
        </form>
      </body>
    </html>
  `);
});

router.post('/getDate', (req: Request, res: Response) => {
  if (req.body.password === '123') {
    const secret = 'x3b174jsx';
    const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
    const analyzer = JennyAnalyzer.getInstance();
    new Crawller(url, analyzer);
    res.send('getData Success!');
  } else {
    res.send('password Error!');
  }
});

export default router;
