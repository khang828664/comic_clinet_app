export interface ILoginState {
  isLoggedIn: boolean;
  username: string;
  password: string;
  userInfo: userInfo | null;
  listPost: ListPost [] | null;
  userCover:string
  historyComic:any[] | null;
  loadSuccess:boolean
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
interface  ListPost { 
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
