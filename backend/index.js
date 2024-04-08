// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

let PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
})