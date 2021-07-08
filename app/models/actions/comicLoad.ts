export interface IComicRequestPayload {
  type: String;
  end:number; 
  start:number;
}

interface ComicList {
  _id: string;
   Name: string;
   Author: string [] ;
   Tag: string [];
   Description:string;
   Rate:number; 
   View:number;
   Cover:string;

}
interface IComicListResponse {
  comicList: ComicList [];
}

export interface IComicListResponsePayload {
  type: String;
  response: IComicListResponse;
}
