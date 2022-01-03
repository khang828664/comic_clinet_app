export interface IComicInfoRequestPayload {
  type: String;
  id:string
  
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
   Chapter:string[];
}
interface IComicInfoResponse {
  comicInfo: ComicInfo;
}

export interface IComicInfoResponsePayload {
  type: String;
  response: IComicInfoResponse;
}

/**
 * Chapter
 */
export interface IChapterResponsePayload {
  type: String;
  response: IChapterResponse
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
interface IChapterResponse {
  chapterList:Chapter[]
}
export interface IChapterRequestPayload {
  type:string;
  idComic:string
}
