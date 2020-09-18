import topVerseModel from "../../models/topVerse.model";

const createTopVerse = async (_: any, { verse }: { verse: string }) => {
  const topVerse = await topVerseModel.create({ verse });

  return topVerse;
};

const updateTopVerse = async (
  _: any,
  { id, verse }: { id: string; verse: string }
) => {
  const topVerse = await topVerseModel.findByIdAndUpdate(id, { verse }).exec();

  return topVerse;
};

const deleteTopVerse = async (
  __dirname: any,
  { id }: { id: string }
): Promise<any> => {
  const topVerse = await topVerseModel.findByIdAndDelete(id).exec();

  return topVerse;
};

export default { createTopVerse, updateTopVerse, deleteTopVerse };
