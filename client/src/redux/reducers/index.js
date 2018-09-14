import { combineReducers } from "redux";
import { hotNovels } from "./hotNovels";
import { selectedChapter } from "./selectedChapter";
import { selectedNovel } from "./selectedNovel";

export default combineReducers({
  hotNovels,
  selectedChapter,
  selectedNovel
});
