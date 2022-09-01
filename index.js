const express = require("express");
const app = express();
app.use(express.json()); //parse the body
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
