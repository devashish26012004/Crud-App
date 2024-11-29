import mongoose from "mongoose";

const URL = "mongodb://localhost:27017/CRUD-App";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });

async function main() {
  await mongoose.connect(URL);
}

export default main;
