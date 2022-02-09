const express = require ('express')
const app = express()

app.set("view engine", "ejs")

app.get( '/', (req,res,netx) => {
    res.render("index")
}) 

app.get( '/test', (req,res,netx) => {
    
    res.send("This is the test page")
})

app.get( '/paolo', (req,res,netx) => {
    
    res.json({
        name: 'Paolo',
        role: 'Teacher',
        Classes: []
    })

})


app.listen(3000)