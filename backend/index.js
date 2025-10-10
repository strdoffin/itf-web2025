const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
let mock_data = [];
app.get('/' , (req,res) => {
    res.send("<h3>HELLO IT68070153</h3>")
})
app.get('/ping', (req,res) => {
    res.json({
        "text":"PONG"
    })
})

app.post('/form', (req,res)=>{
    const owner = req.body.owner
    const color = req.body.color
    const type = req.body.type
    const tires = req.body.tires
    const weight = req.body.weight

    mock_data.push(
        {
            "owner":owner,
            "color":color,
            "type":type,
            "tires": tires,
            "weight":weight,
            "id": mock_data.length
        }
    )
    console.log(mock_data)
    res.json(mock_data[mock_data.length - 1])
})

app.post('/currency', (req, res)=>{
    const c = parseFloat(req.body.currency);
    const type = req.body.type.toUpperCase();
    const rate = parseFloat(32.07);
    if (type === "USD")
    {
        result = c * rate;
        return_type = "THB"
    }
    else if (type == "THB")
    {
        result = c / rate;
        return_type = "USD"
    }
    res.json({
        exchange: result,
        type: return_type
    })
})

const port = 3000
app.listen(port , ()=>{
    console.log(`listening to port ${port}`)
})
