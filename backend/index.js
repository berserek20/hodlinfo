const express = require('express');
const app = express();
const cors =require('cors');
const PORT=3047;
const {routes} = require('./routes/dataroutes')
app.use(cors({origin:true,credentials:true}))

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/user',routes);
app.listen(PORT,()=>[
    console.log(`server is running on http://localhost:${PORT}`)
])