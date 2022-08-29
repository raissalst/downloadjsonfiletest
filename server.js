const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const { rewriter } = require("./routes");
const port = 3004;

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

const rules = auth.rewriter(rewriter);
app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

let routesAvailable = '';
for (const key in rewriter) {
  routesAvailable += `\nhttp://localhost:${port}${key}`;
}

console.log('routes available', routesAvailable);

console.log("Server is running on port:", port);