const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

const rules = auth.rewriter({
  indicebr: 444,
  indicedf: 444,
  consolidadobr: 444,
  consolidadof3: 444,
  consolidadof5: 444,
  consolidadof6: 444,
  consolidadof8: 444,
  fotocand1: 444,
  fotocand2: 444,
  fotocand3: 444,
  fotocand4: 444,
  fotocand5: 444,
  fotocand6: 444,
  fotocand7: 444,
  fotocand8: 444,
  fotocand9: 444
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);
