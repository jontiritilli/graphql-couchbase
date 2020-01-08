const Couchbase = require("couchbase");
const uniqId = require("uniqId");
const config = require("./config");

const dbAuth = {
  username: config.username,
  password: config.password
};

const db = new Couchbase.Cluster("couchbase://localhost", dbAuth);
const bucket = db.bucket(config.bucketName);
const collection = bucket.defaultCollection();

const resolvers = {
  createUser: async data => {
    const id = uniqId();
    const account = {
      id,
      ...data,
      type: "user"
    };
    try {
      await collection.insert(id, account);
    } catch (e) {
      console.log("createUser", "error: ", e);
    }
    console.log(account);
    return account;
  },
  user: async data => {
    const { id } = data;
    try {
      result = (await collection.get(id)).value;
    } catch (e) {
      console.log("user", "error: ", e);
    }
    return result;
  },
  users: async () => {
    const commandText = `
      select *
      from ${bucket._name}
      where type = "user"
    `;
    try {
      rows = (await db.query(commandText)).rows;
      results = rows.map(row => {
        let [modRow] = Object.keys(row).map(key => row[key]);
        return modRow;
      });
      return results;
    } catch (e) {
      console.log("users", "error: ", e);
    }
  }
};

module.exports = resolvers;
