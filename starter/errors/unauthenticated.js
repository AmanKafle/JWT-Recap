const {StatusCodes} = require('http-status-codes')
const CustomAPIError = require('./custom-error')
class unauthenticated extends CustomAPIError {
    constructor(message) {
      super(message)
      this.statusCode = StatusCodes.UNAUTHORIZED
      
    }
  }
  
  module.exports = unauthenticated
  