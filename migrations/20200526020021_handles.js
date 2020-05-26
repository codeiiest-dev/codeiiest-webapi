
exports.up = function(knex, Promise) {
  return knex.schema.createTable('handles', t=> {
	t.integer('user_id').notNull()
	t.string('username')
	t.string('github')
	t.string('stackoverflow')
	t.string('codeforces')
	t.string('codechef')
	t.string('topcoder')
	t.string('spoj')
	t.string('atcoder')
  })
};

exports.down = function(knex,Promise) {
  return knex.schema.dropTable('handles')
};
