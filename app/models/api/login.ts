export interface ILoginResponse {
 userInfo : userInfo 
 listPost : ListPost []
}
interface userInfo {
  _id: string;
  Lastname: string;
  Firstname: string;
  AvatarLink: string;
  DateCreate: string
  DateUpdate: string
  FriendList: string[]
  Comicpost: string[]
  SortDescription:string
  Bookmark:string[]
}
interface ListPost { 
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
export type ILoginRequest =  {
  username:string, 
  password:string,
}
