import topVerseModel from "../../models/topVerse.model";
import middleVerseModel from "../../models/middleVerse.model";
import bottomVerseModel from "../../models/bottomVerse.model";
import { ITopVerse, IMiddleVerse, IBottomVerse } from "../../types";

const haiku = async () => {
  const topVerse = await topVerseModel.aggregate<ITopVerse>([
    { $sample: { size: 1 } },
  ]);
  const middleVerse = await middleVerseModel.aggregate<IMiddleVerse>([
    { $sample: { size: 1 } },
  ]);
  const bottomVerse = await bottomVerseModel.aggregate<IBottomVerse>([
    { $sample: { size: 1 } },
  ]);

  return {
    topVerse: topVerse.length ? topVerse[0].verse : "",
    middleVerse: middleVerse.length ? middleVerse[0].verse : "",
    bottomVerse: bottomVerse.length ? bottomVerse[0].verse : "",
  };
};

export default { haiku };
