import { Config } from './config';
import logger from './config/logger';
import app from './app';

const PORT = Config.PORT;

const startServer = () => {
    try {
        app.listen(PORT, () => {
            // console.log(`server is running on ${Config.PORT}`);
            logger.info('catalog server is running', { PORT });
        });
    } catch {
        logger.error('error while running server', { PORT });
        process.exit(1);
    }
};

startServer();
