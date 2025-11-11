const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Node.js running in Docker on EC2 via GitHub Actions!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
