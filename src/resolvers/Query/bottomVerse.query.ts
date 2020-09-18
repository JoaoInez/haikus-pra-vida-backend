import bottomVerseModel from "../../models/bottomVerse.model";

const BottomVerse = async (_: any, { id }: { id: Number }) => {
  const verse = await bottomVerseModel.findById(id).exec();

  return verse;
};

const allBottomVerses = async (
  _: any,
  { page, perPage }: { page: number; perPage: number }
) => {
  const allVerses = await bottomVerseModel
    .find()
    .skip(page * perPage)
    .limit(perPage)
    .exec();

  return allVerses;
};

const _allBottomVersesMeta = async () => {
  const count = await bottomVerseModel.countDocuments().exec();

  return { count };
};

export default { BottomVerse, allBottomVerses, _allBottomVersesMeta };
