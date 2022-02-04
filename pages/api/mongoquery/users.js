import { connectToDatabase } from "../../../lib/mongodb";
export default async (req, res) => {
  const { data } = req.body;
  const { db } = await connectToDatabase();
  const user = await db.collection("users").findOne({ email: data.email });
  if (user !== null) {
    user.msg = "Exist";
    res.status(200).send(user);
  } else {
    const newuser = await db.collection("users").insertOne(data);
    data.msg = "Not Exist";
    res.status(200).send(data);
  }
};
