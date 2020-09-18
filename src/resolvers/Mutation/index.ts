import topVerseMutation from "./topVerse.mutation";
import middleVerseMutation from "./middleVerse.mutation";
import bottomVerseMutation from "./bottomVerse.mutation";

export default {
  ...topVerseMutation,
  ...middleVerseMutation,
  ...bottomVerseMutation,
};
