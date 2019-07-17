import {DataType, DataTypes} from 'sequelize';

export default {
    User:{
        options: {
            tableName: 'users',
            createdAt: 'date_created',
            updatedAt: 'date_updated',
        },
        attributes: {
            name:{
                type: DataTypes.STRING
            }
        },
        relations: {
            
        },
    }
}