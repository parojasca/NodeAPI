module.exports = (app) => {
    app.get("/", (req, res) => {
        res.send("en la page");
    });
    app.get("/route", (req, res) => {
        res.send("en route page");
    });
    app.get("*", (req, res) => {
        res.send("what");
    });
}