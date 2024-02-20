const newRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
  //   app.get("/", (req, res) => {
  //     res.render("home");
  //   });

  //   app.get("/news", (req, res) => {
  //     res.render("news");
  //   });

  app.use("/news", newRouter);
  app.use("/", siteRouter);

  //   app.post("/search", (req, res) => {
  //     console.log(req.body);
  //     res.render("search");
  //   });
}

module.exports = route;
