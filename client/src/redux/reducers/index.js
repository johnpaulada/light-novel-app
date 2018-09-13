import { combineReducers } from "redux";
import { hotNovels } from "./hotNovels";
import { selectedNovel } from "./selectedNovel";

export default combineReducers({
  hotNovels,
  selectedNovel
});
