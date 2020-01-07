const Express = require("express");
const bodyParser = require("body-parser");
const GQL = require("express-graphql");
const schema = require("./schema");

const app = Express();

const PORT = process.env.PORT || 3000;

const rootValue = require("./resolvers");

app.use(bodyParser.json());
app.use(
  "/graphql",
  GQL({
    schema,
    rootValue,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Listening at : ${PORT}`);
});
