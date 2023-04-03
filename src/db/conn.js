const mongoose = require("mongoose")
mongoose.connect("Process.env.connection", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log("connected....!!!");
}).catch((e) => { console.log("not connected....!!!"); })

