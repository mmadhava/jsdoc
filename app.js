const express = require("express");
const shell = require('shelljs');
let samplejsdoc = require("./controllers/jsdocController.js");



const JSDOCOptions = { ENDPOINT:'/Docs', DESTINATION: '/docs'};
const JSDocCommand = 'jsdoc -c JSDoc.json';
//Excuting jsdoc command.
shell.exec(JSDocCommand);

const app = express();

let port = (process.env.VCAP_APP_PORT || 8080);
let host = (process.env.VCAP_APP_HOST || 'localhost');

app.use(JSDOCOptions.ENDPOINT,express.static(__dirname+JSDOCOptions.DESTINATION));

 /**
 * End point to demonstrate jsdoc functionality.
 * Input Parameter
 * @param {Request}  req Contains request body details
 * @param {Response} res Response object sent back to the UI
 * Output Parameter
 * @returns {json} Response with status 201 successful response message
 * @returns {json} Response with status error code with errors message
 */
app.post('/jsdocDemo', function (req,res) {
   users.jsdocSample(req,function (err,data) {
      if(err){
       res.status(202).send(err);
      }else{
       res.status(201).send(data);
      }       
   });
});

// start express NodeJs server on the specified port and binding host
app.listen(port, host, function() {
   console.log("Server started with port number -------------",port);
});
 
 module.exports = app;