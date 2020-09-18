import middleVerseModel from "../../models/middleVerse.model";

const createMiddleVerse = async (_: any, { verse }: { verse: string }) => {
  const middleVerse = await middleVerseModel.create({ verse });

  return middleVerse;
};

const updateMiddleVerse = async (
  _: any,
  { id, verse }: { id: string; verse: string }
) => {
  const middleVerse = await middleVerseModel
    .findByIdAndUpdate(id, { verse })
    .exec();

  return middleVerse;
};

const deleteMiddleVerse = async (
  __dirname: any,
  { id }: { id: string }
): Promise<any> => {
  const middleVerse = await middleVerseModel.findByIdAndDelete(id).exec();

  return middleVerse;
};

export default { createMiddleVerse, updateMiddleVerse, deleteMiddleVerse };
