export interface IComicInfoState {
  idComic: string
  comicInfo: ComicInfo | null
  chapterList:Chapter[]
  loadError: boolean
  loadSuccess: boolean
  loadChapterSuccess:false
  isBookmark: boolean
  userLike: boolean
  userDislike: boolean
}
interface ComicInfo {
  _id: string;
  Name: string;
  Author: string[];
  Tag: string[];
  Description: string;
  Rate: number;
  View: number;
  Cover: string;
  Like: number;
  Dislike: number;
  Chapter: string[]
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
