import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

const port = 3000;

app.get("/", (req, res) => {
    res.render("home", {data: "Prasanna"});
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/museum", (req, res) => {
    res.render("museum");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/contact", (req, res) => {
    res.render("contact");
})

app.get("/model", (req, res) => {
    res.render("model");
});

app.listen(port, () => {
    console.log("The server is connected to your computer.");
});