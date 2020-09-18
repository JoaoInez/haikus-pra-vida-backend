import { Schema, model } from "mongoose";
import { IBottomVerse } from "../types";

const bottomVerseSchema = new Schema({
  verse: String,
});

export default model<IBottomVerse>("BottomVerse", bottomVerseSchema);
