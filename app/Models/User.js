import BaseModel from '../../vendor/Model';
import UserSchema from '../Schemas/UserSchema';
class User extends BaseModel {
    static registerHooks () {
        this.beforeSave((user) => {
            if (user.changed('password') && user.password) {
                if (user.password.substr(0, 7) === 'bcrypt$') {
                    throw new Error('Do not bcrypt passwords before setting them');
                }

                const hash = this.services.password.hash(user.password);

                user.dataValues.password = `bcrypt$${hash}`;
            }
        });

        return this;
    }
}

// User.init(UserSchema.User.attributes,)


export default User;
