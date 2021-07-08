export interface IComicSearchState {
  comicSearchName:ComicInfo[]
  comicSearchAuthor:ComicInfo[]
  loadError: boolean
  loadSuccess: boolean
}
interface ComicInfo {
  _id: string;
  Name: string;
  Author: string[];
  Tag: string[];
  Cover: string;
}

