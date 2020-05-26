const Router = require('express').Router()
const createError = require('http-errors')
const User = require('../db/models/user')
const asyncHandler = require('express-async-handler')
const phin = require('phin')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const moment = require('moment')

Router.post('/signup', asyncHandler(async (req,res,next)=>{
    const { name, email, password } = req.body

    try{
        const disposableCheck = await phin({
            'url': `https://open.kickbox.com/v1/disposable/${email.split('@')[1]}`,
            'parse': 'json'  
        })

        if(disposableCheck.body.disposable) {
            return res.status(406).json({ message: 'Disposable emails not permitted' })
        }

        const hash = await bcrypt.hash(password,12)
        var timestamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');

        await User.query().insert({
            name: name,
            email: email,
            password: hash,
            created_at: timestamp
        })

        const getUser = await User.query().findOne({ email: email })
        const id = getUser.id;
        const accessToken = await jwt.sign( { id }, process.env.JWT_SECRET)

        res.json({
            token: {
                accessToken
            }
        })
    }catch(error) {
        throw createError(500,'Try again later', { stackTrace: error })
    }
}))

module.exports = Router