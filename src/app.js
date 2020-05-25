import express from "express";
import basicRouter from "./router/basicRouter";
import routes from "./routes";
import path from "path";
import bodyParser from "body-parser";

const PORT = 4001;
const app = express();

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes.home, basicRouter);
app.use(routes.write, basicRouter);
app.use(routes.delete, basicRouter);

app.listen(PORT, () => {
  console.log(`Server Start localhost: ${PORT}`);
});
