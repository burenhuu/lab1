const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  let data = {
    status: 200,
    message: null,
    data: [
      {
        id: 1,
        name: "Product 1",
        price: 10000,
      },
      {
        id: 2,
        name: "Product 2",
        price: 1500,
      },
      {
        id: 3,
        name: "Product 3",
        price: 13400,
      },
    ],
  };
  res.send(data);
});

app.get("/login", (req, res) => {
  console.log(req.query);
  let is_logged_in = false;
  let is_auth = false;
  if ("ADMIN" === req.query.username && "ADMIN123" === req.query.password) {
    is_logged_in = true;
    is_auth = true;
  } else {
    is_auth = false;
    is_logged_in = true;
  }
  res.render("login", { is_logged: is_logged_in, is_auth: is_auth });
});

app.get("/:id", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send("data");
});

app.post("/", (req, res) => {
  let number_1 = req.body.number_1;
  let number_2 = req.body.number_2;
  let number_answer = number_1 + number_2;
  let answer = "Answer: " + number_answer;

  res.send(answer);
});

app.post("/addNumbers", (req, res) => {
  let number_1 = req.body.number_1;
  let number_2 = req.body.number_2;
  let number_answer = number_1 + number_2;
  let answer = "Answer: " + number_answer;

  res.send(answer);
});

app.put("/", (req, res) => {
  console.log(req.body);
  res.send("Hello, Express!");
});

app.patch("/", (req, res) => {
  console.log(req.body);
  res.send("Hello, Express!");
});

app.delete("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
