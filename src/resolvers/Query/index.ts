import haikuQuery from "./haiku.query";
import topVerseQuery from "./topVerse.query";
import middleVerseQuery from "./middleVerse.query";
import bottomVerseQuery from "./bottomVerse.query";

export default {
  ...haikuQuery,
  ...topVerseQuery,
  ...middleVerseQuery,
  ...bottomVerseQuery,
};
