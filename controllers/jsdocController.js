

/**
 * Sample fucntion to demonstrate jsdoc fucntionality
 * Input Parameter
 * @param {Request} req   Request Object - Request object with jsdoc parameter
 * Output Parameter
 * @returns {string}  Response message 
 */
exports.jsdocSample = function(req,callback){
   if(req.body.jsdoc === true){
      var data = "jsdoc file is  generated successfully."
      callback(null,data);
   }
   else{
      callback("Error in jsdoc file creation",);
   }	

}