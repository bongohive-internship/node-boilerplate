/**
 * @name JoiErrorHandler
 * @param  {error:{details:[]}} validationError
 * @returns Array
 * @description this function iterates through the Joi Error object retrieves actual invalidation messages.
 */
export default  async(validationError)=>{
    const messages = []
     validationError.error.details.forEach(error => {
        messages.push(error.message)
    })
    
    return messages;
}