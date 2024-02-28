

import mongoose from "mongoose";

export const connectDB = () => {

    mongoose.connect('mongodb://0.0.0.0:27017', {
        dbName: "STQA_Mini_Project",
    }).then(() => console.log("db connect"))
      .catch((e) => console.log(e))

}