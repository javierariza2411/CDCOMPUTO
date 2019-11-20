const express = require('express');
const path = require('path');

const app = express();
const server=http.createServer(app);

app.set('port',process.env.PORT || 3000);


app.use(express.static(path.join(__dirname,'public')));
// app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname+'/dist/ng-blog/index.html'));
// });

// app.listen(process.env.PORT || 8080);
server.listen(app.get('port'), ()=>{
    console.log('Server on port' ${app.get('port')});

