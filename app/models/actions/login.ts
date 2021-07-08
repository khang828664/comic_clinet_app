export interface ILoginRequestState {
  type: String;
  username: string;
  password: string;
  bookmark: Bookmark;

}
interface Bookmark {
  _idComic:string
  status:boolean
}
interface listPost { 
  _id: string
  Author: string[]
  Name: string
  Tag: string[]
  Rate: number
  like: number
  dislike:number
  View: number
  ChapterSum:number
  Cover: string
}
interface userInfo {
  _id: string;
  Lastname: string;
  Firstname: string;
  Avatar: string;
  DateCreate: string
  DateUpdate: string
  FriendList: string[]
  Comicpost: string[]
  SortDescription:string
  Bookmark:string[]

}

interface IResponse {
  userInfo: userInfo;
  listPost: listPost;
}

export interface ILoginResponseState {
  type: String;
  response: IResponse;
}
