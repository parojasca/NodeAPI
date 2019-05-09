var express = require('express');
var app = express();

//const PORT = 3000;
const PORT = process.env.PORT || 1337;
require("../routes/api.js")(app);
require("../routes/views.js")(app);


function init(){
    console.log("inciado express");
    app.listen(PORT,()=>{
        console.log("server activo")
    });
}

 init();
 /*
app.get('/', function (req, res) {
res.send('Hola mundo desde el sena');
});

app.listen(3000, function () {
console.log(`Server running at port ${PORT}`);
}); */
//
//module.exports(app);
