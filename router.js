module.exports  = function(app){
    app.get('/',(req,res,next)=>{
        res.send(['a','b','c']);
    });
         app.get('/123',(req,res,next)=>{
               res.send(['watch','mobile','earphone']);
           });
           app.post('/prettygood',(req,res,next)=>{
                console.log('theName :',req.body.name);
                res.send('you are pretty good');
            });
    
    }