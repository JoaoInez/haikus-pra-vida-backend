import { Schema, model } from "mongoose";
import { IMiddleVerse } from "../types";

const middleVerseSchema = new Schema({
  verse: String,
});

export default model<IMiddleVerse>("MiddleVerse", middleVerseSchema);
