
var table = module.exports = require('azure-mobile-apps').table();

// table.read(function (context) {
//     return context.execute();
// });
table.read(function (context){
   context.req.azureMobile.user.getIdentity() 
});
// table.read.use(customMiddleware, table.operation);
