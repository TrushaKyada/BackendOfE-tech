const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://trusha_kyada:mzpDm8tMztVxwA6w@cluster0.byle2xx.mongodb.net/education", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log("connected....!!!");
}).catch((e) => { console.log("not connected....!!!"); })

