const http = require("http");

const host = "localhost";
const port = 3000

const TAREAS = [
    {id: 1, description: "estudiar", completado: false},
    {id: 2, description: "hacer tareas con mis hijas", completado: false},
    {id: 3, description: "hacer aseo", completado: false},
    {id: 4, description: "jugar", completado: false},
    {id: 5, description: "cita medica", completado: false},
    {id: 6, description: "cita medica 1", completado: false}
]

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "application/json"});
    res.end(JSON.stringify(TAREAS));
});

server.listen(port, host, () => {
    console.log(`servidor funcionando en http://${host}:${port}`);
});