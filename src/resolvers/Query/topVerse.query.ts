import topVerseModel from "../../models/topVerse.model";

const TopVerse = async (_: any, { id }: { id: Number }) => {
  const verse = await topVerseModel.findById(id).exec();

  return verse;
};

const allTopVerses = async (
  _: any,
  { page, perPage }: { page: number; perPage: number }
) => {
  const allVerses = await topVerseModel
    .find()
    .skip(page * perPage)
    .limit(perPage)
    .exec();

  return allVerses;
};

const _allTopVersesMeta = async () => {
  const count = await topVerseModel.countDocuments().exec();

  return { count };
};

export default { TopVerse, allTopVerses, _allTopVersesMeta };
