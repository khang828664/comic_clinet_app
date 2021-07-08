export interface IComicListResponse {
  comicListName: ComicList[]
  comicListAuthor :ComicList[]
}
export type IComicSearchRequest = {
  name: string
  author: string
}
interface ComicList {
  _id: string;
  Name: string;
  Author: string[];
  Tag: string[];
  Cover: string;
}

