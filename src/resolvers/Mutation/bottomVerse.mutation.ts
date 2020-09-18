import bottomVerseModel from "../../models/bottomVerse.model";

const createBottomVerse = async (_: any, { verse }: { verse: string }) => {
  const bottomVerse = await bottomVerseModel.create({ verse });

  return bottomVerse;
};

const updateBottomVerse = async (
  _: any,
  { id, verse }: { id: string; verse: string }
) => {
  const bottomVerse = await bottomVerseModel
    .findByIdAndUpdate(id, { verse })
    .exec();

  return bottomVerse;
};

const deleteBottomVerse = async (
  __dirname: any,
  { id }: { id: string }
): Promise<any> => {
  const bottomVerse = await bottomVerseModel.findByIdAndDelete(id).exec();

  return bottomVerse;
};

export default { createBottomVerse, updateBottomVerse, deleteBottomVerse };
