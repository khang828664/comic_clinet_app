export interface IBookmarkListResponse {
  listBookmark: BookmarkList[]
}
export type IBookmarkListRequest = {
  idUser: string
}
interface BookmarkList {
  _id: string;
  Name: string;
  Author: string[];
  Tag: string[];
  Rate: number;
  View: number;
  Cover: string;
  Like: number;
  DisLike: number;
}

