export interface IBookmarkRequestPayload {
  type: String;
  idUser: string;
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
interface IBookmarkListResponse {
  bookmarkList: BookmarkList[];
}

export interface IBookmarkListResponsePayload {
  type: String;
  response: IBookmarkListResponse;
}
