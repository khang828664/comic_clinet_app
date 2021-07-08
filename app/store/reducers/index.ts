/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as themeReducer from './themeReducer';
import * as listComicReducer from './listComic';
import * as infoComicReducer from './infoComic'
import * as searchComicReducer from './searchComicReducer'
import * as listBookmarkReducer from './listBookmark'
export default Object.assign(loginReducer,
  loadingReducer,
  themeReducer,
  listComicReducer,
  infoComicReducer,
  searchComicReducer,
  listBookmarkReducer
);
