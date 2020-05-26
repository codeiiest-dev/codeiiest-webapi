const { Model } = require('objection')

class User extends Model {
    static get tableName() {
        return 'handles';
    }
}

module.exports = User;