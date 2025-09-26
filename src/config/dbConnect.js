import mongoose, {mongo} from "mongoose";

async function conectaDatabase() {
    mongoose.connect(process.env.DB_STRING_CON);
    return mongoose.connection;
}

export default conectaDatabase;
