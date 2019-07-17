import schema from '../database/Schema';
import BaseModel from './Model';

export default class Database {
    constructor (connection) {
        // connection is an instance of DatabaseConnection
        this.connection = connection;
        this.loadedModels = null;
    }

    get models () {
        return this.loadedModels;
    }

    loadModels (services) {
        /** @type Object<Sequelize.Model> */
        const models = {};

        Object.keys(schema).forEach((modelName) => {
            const definition = schema[modelName];

            definition.name = definition.name || modelName;

            let Constructor = BaseModel;

            if (typeof definition.class === 'function') {
                Constructor = definition.class;
            }

            if (!(Constructor.prototype instanceof BaseModel)) {
                throw new Error(`Model class for ${definition.name} must extend BaseModel`);
            }

            models[definition.name] = Constructor.init(definition, services);
        });

        Object.keys(schema).forEach((modelName) => {
            models[modelName].associate();
            models[modelName].registerHooks();
            
            // Here we also register global sequelize hooks
            // e.g. in our application we added eagerLoader method to the BaseModel,
            // in order to preload associations (due to the complex nature of relationships in our app,
            // native sequelize approach of eager loader just wouldn't work)
            models[modelName].afterFind(models[modelName].eagerLoader);
        });

        this.loadedModels = models;
    }

    async sync (options) {
        // @warning This should only be used by tests
        // for development and production instances use cli

        await this.connection.sync(options || {});
    }
}