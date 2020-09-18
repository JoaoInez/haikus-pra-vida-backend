import middleVerseModel from "../../models/middleVerse.model";

const MiddleVerse = async (_: any, { id }: { id: Number }) => {
  const verse = await middleVerseModel.findById(id).exec();

  return verse;
};

const allMiddleVerses = async (
  _: any,
  { page, perPage }: { page: number; perPage: number }
) => {
  const allVerses = await middleVerseModel
    .find()
    .skip(page * perPage)
    .limit(perPage)
    .exec();

  return allVerses;
};

const _allMiddleVersesMeta = async () => {
  const count = await middleVerseModel.countDocuments().exec();

  return { count };
};

export default { MiddleVerse, allMiddleVerses, _allMiddleVersesMeta };
