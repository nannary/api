const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 8082;

app.get("/api/testText", (request, response) => {
  response.send("Lab 9 -2 Rest Api โปรแกรมคำนวณสูตรคณิตศาสตร์");
});

app.get("/api/get-tArea", (request, response) => {
  let h = request.query.height || "";
  let b = request.query.base || "";
  let a = 0.5 * h * b;
  let re = { area: a };
  response.json(re);
});

app.post("/api/post-cArea", (request, response) => {
  let r = request.body.radius || "";
  let a = 3.1415 * r ** 2;
  let l = 2 * 3.1415 * r;
  let re = { area: a, line: l };
  response.json(re);
});
// อัตราเร็ว
app.get("/api/get-speedResult", (request, response) => {
  let d = request.query.distance || "";
  let t = request.query.time || "";
  let a = d / t;
  // let re = { area: a };
  response.send("" + a);
});
// BMI
app.post("/api/post-bmiResult", (request, response) => {
  let w = request.body.weight || "";
  let h = request.body.height || "";
  let a = (w / (h / 100) ** 2).toFixed(2);
  let re = { area: a };
  response.json(re);
});

app.get("/api/get-waterbill", (request, response) => {
  let a = request.query.amount || "";
  let p = request.query.price || "";
  let s = (a * p + 50) / 70;
  // let re = { area: a };
  response.send("" + s);
});

app.post("/api/post-watt", (request, response) => {
  let w = request.body.watt || "";
  let n = request.body.number || "";
  let h = request.body.hour || "";
  let a = ((w * n) / 1000) * h;
  let re = { area: a };
  response.json(re);
});

app.listen(port, () => console.log("Start server on port " + port));
