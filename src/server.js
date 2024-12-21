const express = require("express");
const bodyParser = require("body-parser");
const predictRoute = require("./routes/predictsRoute");
const historyRoute = require("./routes/historiesRoute");
const { errorMiddleware } = require("./middlewares/errorMiddleware");

const app = express();
app.use(bodyParser.json());
app.use("/predict", predictRoute);
app.use("/predict/histories", historyRoute);

app.use(errorMiddleware);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});