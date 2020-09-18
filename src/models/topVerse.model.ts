import { Schema, model } from "mongoose";
import { ITopVerse } from "../types";

const topVerseSchema = new Schema({
  verse: String,
});

export default model<ITopVerse>("TopVerse", topVerseSchema);
