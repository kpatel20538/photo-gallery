// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URL);

async function handle() {
  try {
    await client.connect();
    const pong = await client.db("photo-geoshare").command({ ping: 1 });
    console.log(`logging: ${pong}`);
    return {
      message: "Connected successfully to server",
    };
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
