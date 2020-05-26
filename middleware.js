const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('express-jwt')

module.exports = function(app) {
    app.use(cookieParser())
    app.use(bodyParser.json())

    app.use('/api/*', jwt({ secret: process.env.JWT_SECRET }))
}