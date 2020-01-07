const Couchbase = require("couchbase");
const UUID = require("uuid");
const config = require("./config");

const dbAuth = {
  username: config.username,
  password: config.password
};

const db = new Couchbase.Cluster("couchbase://localhost", dbAuth);
const bucket = db.bucket(config.bucketName);
const collection = bucket.defaultCollection();

const resolvers = {
  createAccount: async data => {
    const id = UUID.v4();
    const account = {
      ...data,
      type: "account"
    };
    const result = await collection.upsert(id, account);
    return result;
  },
  account: data => {
    const { id } = data;
    const result = collection.get(id);
    return result;
  },
  accounts: async () => {
    const commandText = `
      select *
      from ${bucket._name}
      where type = "account"`;
    const { rows } = await db.query(commandText);
    const results = rows.map(row => {
      return {
        ...row.example
      };
    });
    console.log(results);
    return results;
  }
};

module.exports = resolvers;
