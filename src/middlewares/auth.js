import jwt from 'jsonwebtoken';
import config from 'config';
import constants from '../../config/constants';
const debug = require('debug')('server:debug')

export default (req, res, next) => {
  const token = req.headers['x-auth-token'];
  const dash_token = req.headers['x-access-token']
  // checks if the dashboard is the one sending requests
  if (dash_token) {

    processDashToken(dash_token, res, next)

  } else if (token) {
    processUserAcessToken(token, req, res, next)

  } else {
    if (!token) return res.status(401).json({
      status: false,
      message: 'No access Token'
    })

  }
}


const processDashToken = (token, res, next) => {
  if (token === process.env.TOKEN_SECRET_DEV) {
    next()
  } else {
    return res.status(constants.status_code.STATUS_CODE_UNAUTHORIZED).json({
      status: false,
      message: 'Invalid Token'
    })
  }

}


const processUserAcessToken = (token, req, res, next) => {
  //if token exists verify it and return data if token is verified.
  jwt.verify(token, config.get('DEV_API_KEY'), (err, decoded) => {
    debug(decoded)
    if (err) return res.status(401).json({
      status: false,
      message: 'Failed to verify Token'
    })
   return next()


  })
}