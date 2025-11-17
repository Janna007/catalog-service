import express from 'express';
import { Config } from './config';
import logger from './config/logger';

const app = express();

export const sum = (a: number, b: number) => {
    return a + b;
};

const PORT = Config.PORT;
app.listen(PORT, () => {
    // console.log(`server is running on ${Config.PORT}`);
    logger.info('catalog server is running', { PORT });
});
