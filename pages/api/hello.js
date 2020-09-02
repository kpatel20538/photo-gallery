// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { MongoClient } = require("mongodb");

/* const client = new MongoClient(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_URL}/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`
); */

console.log(process.env.MONGO_URL)
async function handle() {
  try {
    /* await client.connect();
    await client.db("admin").command({ ping: 1 });
     */return { message: "Connected successfully to server" };
  } finally {
    /* await client.close(); */
  }
}

export default async (req, res) => {
  try {
    res.status(200).json(await handle(req.body));
  } catch (error) {
    console.dir(error);
    res.status(500).json({ error: "Something somewhere went wrong." });
  }
};
