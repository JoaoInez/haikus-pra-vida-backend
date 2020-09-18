import { Document } from "mongoose";

export interface ITopVerse extends Document {
  verse: string;
}

export interface IMiddleVerse extends Document {
  verse: string;
}

export interface IBottomVerse extends Document {
  verse: string;
}
