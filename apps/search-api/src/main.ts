import * as express from 'express';
import pageRoutes from './app/v1/page/page-routes';
import { urlencoded, json } from 'body-parser';
import { logMiddleware, accessControlMiddleware, errorHandler } from './app/middleware';

const app = express();
const port = process.env.port || 3333;

app.use(urlencoded({ extended: false }));
app.use(json());
app.use(logMiddleware);
app.use(accessControlMiddleware);

app.use('/api/v1/pages', pageRoutes);

app.use(errorHandler);

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api/v1`);
});

server.on('error', console.error);
