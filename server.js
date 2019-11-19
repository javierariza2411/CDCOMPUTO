
//Install express server
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8088

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/CDCOMPUTO'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/CDCOMPUTO/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(port, function(){
    console.log('Servidor iniciado '+port)
});