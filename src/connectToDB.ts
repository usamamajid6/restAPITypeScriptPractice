import mongoose from 'mongoose';
const URILocal: string = "mongodb://localhost:27017/PracticeA";
const connectToDB = (): any => {
  mongoose.connect(
    URILocal,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Database connected!");
    }
  );
};

export default connectToDB;
