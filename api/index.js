const shopData = require("./mock/data.json")
module.exports = (app) => {
    app.get("/fruitsData", (req, res) => {
       res.send(shopData)
    })
}