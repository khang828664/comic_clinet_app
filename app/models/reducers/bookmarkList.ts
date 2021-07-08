export interface IBookmarkListState {
  bookmarkList: BookmarkInfo[]
  loadError: boolean
  loadSuccess: boolean
}
export type IBookmarkListRequest = {
  idUser:string
}
interface BookmarkInfo {
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

