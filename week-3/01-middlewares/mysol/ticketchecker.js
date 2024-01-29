const express = require('express')
const app = express();

app.use(function inOldEnough(age){
    if(age >= 14){
        return true;
    }
    else{
        return false;
    }
})

app.get('/ride', function(req,res) {
    const rideno = req.query.age
    if(inOldEnough(13)){
        res.status(201).json({
        msg : " YOU CAN RIDE THIS RIDE BUT don't BE A DICKRIDER."
    });
    }
        else{
            res.status(404).json({
                msg: " fuck off!1 "
                
            })
        }
    
})
app.listen(3000);