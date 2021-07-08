export interface IComicListState {
  start:number, 
  end:number,
  comicList : ComicList []
  loadError : boolean
  loadSuccess: boolean
 }
 export type IComicListRequest =  {
  start:number,
  end:number,
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
 
 