
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', t=> {
	t.increments('id').unsigned().primary()
	t.dateTime('createdAt').notNull()
	t.dateTime('updatedAt').nullable()

	t.string('name').notNull()
	t.string('email').notNull()
	t.string('password_hash').notNull()
  })
};

exports.down = function(knex,Promise) {
  return knex.schema.dropTable('users')
};
