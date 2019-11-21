# JSDOC Integration to Nodejs App

As a tool, JSDoc takes JavaScript code with special ```/** */``` comments and produces HTML documentation for it


## Configuration

```
const JSDOCOptions = { ENDPOINT:'/Docs', DESTINATION: '/docs'};
const JSDocCommand = 'jsdoc -c JSDoc.json';
shell.exec(JSDocCommand); 
This command generates jsdoc document, when node application excuted.
```

### Install dependencies
```bash
npm install
```
### Run application in dev mode
```bash
npm start
```
### How to put comment to a method

```
This demonstrates some of the JSDoc syntax which consists of the following pieces.
JSDoc comment: is a JavaScript block comment whose first character is an asterisk. This creates the illusion that the token /** starts such a comment.
Tags: Comments are structured by starting lines with tags, keywords that are prefixed with an @ symbol. @param is an example above.
HTML: You can freely use HTML in JSDoc comments; for example, <tt> to display a word in a monospaced font.
Type annotations: You can document the type of a value by putting the type name in braces after the appropriate tags. Variations:
Single type:    @param {string} name
Multiple types: @param {string|number} idCode
Arrays of a type:   @param {string[]} names
```

```
{returnType} description: describes the return value of the function or method. Either type or description can be omitted.
@throws {exceptionType} description: describes an exception that might be thrown during the execution of the function or method. Either type or description can be omitted.
```
```
/**
* Sample fucntion to demonstrate jsdoc functionality
* Input Parameter  
* @param {Request} req   Request Object - Request object with jsdoc parameter
* Output Parameter
* @returns {string}  Response message 
*/
```
## Testing
To see the generated jsdocs you can access the http://localhost:8080/Docs
