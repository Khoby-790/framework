import { inspect } from 'util';
import Sequelize from 'sequelize';

export default function DatabaseConnection (config, logger) {
    const {
        dialect,
        name,
        host,
        port,
        user,
        password,
    } = config.db;

    const logging = (...args) => {
        args = args.map((arg) => {
            return inspect(arg);
        });

        logger.debug(...args);
    };

    return new Sequelize(name, user, password, {
        host,
        dialect,
        port,
        logging,
        define: {
            underscored: true,
        },
    });
}