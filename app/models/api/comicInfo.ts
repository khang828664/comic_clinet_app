export interface IComicInfoResponse {
  comicInfo : ComicInfo 
 }

export interface IChapterResponse{
  chapterList  : Chapter[]
}
 export type IComicListRequest =  {
  id:string,
}
  export type IChapterRequest ={
  idComic:string ,
  }
interface Chapter {
  _id:string ,
  DateCreate: string,
  DateUpdate: string,
  ChapterIndex: string,
  Description:string,
  Image:string[],
  _idComic:string
}
interface ComicInfo {
   _id: string;
   Name: string;
   Author: string [] ;
   Tag: string [];
   Description:string;
   Rate:number; 
   View:number;
   Cover:string;
   Chapter:string[]
   Comment:string []
   Review:string [] 
 }
 
 