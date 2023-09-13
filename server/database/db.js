import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
  const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.8gskrff.mongodb.net/?retryWrites=true&w=majority`;

  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("Base de datos conectada!");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("base de datos desconectada");
  });

  mongoose.connection.on("error", () => {
    console.log("Ha ocurrido un error al conectar la base de datos ", error.message);
  });
};

export default Connection;
