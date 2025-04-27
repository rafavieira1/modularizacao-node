import express from 'express';
import { routes } from './routes';
import { errorHandler } from './shared/middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorHandler);

export { app }; 