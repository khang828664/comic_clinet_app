export interface IComicSearchRequestPayload {
  type: String;
  name :string;
  author:string;
}


interface IComicListResponse {
  comicListName: ComicList [];
  comicListAuthor:ComicList[]
}
interface ComicList {
  _id: string;
   Name: string;
   Author: string [] ;
   Tag: string [];
   Cover:string;

}
export interface IComicListResponsePayload {
  type: String;
  response: IComicListResponse;
}
