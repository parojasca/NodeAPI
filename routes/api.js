const API_BASE = "/api";
const db = require("../db");
var cors = require('cors');
module.exports = function (app) {
    app.get(`${API_BASE}/users`,cors(), (req, res) => {
        const query = db.getUsers();
        res.json(query);
    }),
        app.get(`${API_BASE}/user/:id`, (req, res) => {
            const query = db.getUserById(req.params.id);
            res.json(query);
        })
};