const { Model } = require('objection')

class User extends Model {
    static get tableName() {
        return 'users';
    }

    static get relationMappings() {
        const Handles = require('./handles')
        return {
            handles: {
                relation: Model.HasOneRelation,
                modelClass: Handles,
                join:{
                    from: 'users.id',
                    to: 'handles.user_id'
                }
            }
        }
    }
}

module.exports = User;