import Sequelize from 'sequelize';
const InterFaceBaseModel = Sequelize.Model;

export default class BaseModel extends InterFaceBaseModel {
    static init(sequelize){
        return super.init(this.$attributes,{sequelize});
    }

    static associate(models) {
        this.myAssociation = this.belongsTo(models.OtherModel);
    }

    static create(obj){
        return this.create(obj);
    }

    
}