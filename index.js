let express = require("express");
let app = express();

let router = express.Router();

router.get("/", function (req, rex, next) {
  res.send("Apple");
});

app.use("/api/", router);

var server = app.listen(5000, function () {
  console.log("Node server is running on http://localhost:5000..");
});
