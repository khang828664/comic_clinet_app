import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';
import { Author } from 'app/screens/ComicInfo/component';

export function GetListComic(start: number, end: number) {
  return apiClient.get(ApiConfig.COMIC.lISTCOMIC + `${start}/${end}`)
  // return apiClient.get(ApiConfig.COMIC.COMICALL)
}
export function GetComicInfo(id: string) {
  return apiClient.get(ApiConfig.COMIC.COMICINFO + `${id}`)
}

export function GetChapterList(id: string) {
  return apiClient.get(ApiConfig.CHAPTER.LISTCHAPTER + `${id}`)
}
// Find by name
export function GetComicListName(name: string) {
  console.log(name)
  return apiClient.post(ApiConfig.COMIC.SEARCHNAME, {
    name: name
  }
  )
}
// Find by author
export function GetComicListAuthor(author: string) {
  return apiClient.post(ApiConfig.COMIC.SEARCHAUTHOR, {
    author: author
  })
}

//Bookmark function 
export function Bookmark(idComic: string, idUser: string) {
  return apiClient.post(ApiConfig.COMIC.BOOKMARK + `${idComic}/${idUser}`)
}

//Getbookmark Function
export function GetBookmark(idUser: string) {
  return apiClient.post(ApiConfig.COMIC.GETBOOKMARK + `${idUser}`)
}
