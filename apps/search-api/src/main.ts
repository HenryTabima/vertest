import * as express from 'express';
import pageRoutes from './app/v1/page/page-routes';

const app = express();
const port = process.env.port || 3333;

app.use(express.json({ limit: '100mb' }));

app.use('/api/v1/pages', pageRoutes);

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api/v1`);
});

server.on('error', console.error);
