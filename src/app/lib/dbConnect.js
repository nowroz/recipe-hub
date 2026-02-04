const { MongoClient, ServerApiVersion } = require("mongodb")

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vocnynm.mongodb.net/?appName=Cluster0`

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

export const connect = (collection) => {
  const db = client.db("recipeHubDB")

  return db.collection(collection)
}
