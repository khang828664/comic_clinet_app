import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';
import { Author } from 'app/screens/ComicInfo/component';

export function GetListComic(start: number, end: number) {
  return apiClient.get(ApiConfig.COMIC.lIST_COMIC + `${start}/${end}`)
  // return apiClient.get(ApiConfig.COMIC.COMICALL)
}
export function GetComicInfo(id: string) {
  return apiClient.get(ApiConfig.COMIC.COMIC_INFO + `${id}`)
}

export function GetChapterList(id: string) {
  return apiClient.get(ApiConfig.CHAPTER.LIST_CHAPTER + `${id}`)
}
// Find by name
export function GetComicListName(name: string) {
  console.log(name)
  return apiClient.post(ApiConfig.COMIC.SEARCH_NAME, {
    name: name
  }
  )
}
// Find by author
export function GetComicListAuthor(author: string) {
  return apiClient.post(ApiConfig.COMIC.SEARCH_AUTHOR, {
    author: author
  })
}

//Bookmark function 
export function Bookmark(idComic: string, idUser: string) {
  return apiClient.post(ApiConfig.COMIC.BOOKMARK + `${idComic}/${idUser}`)
}

//Getbookmark Function
export function GetBookmark(idUser: string) {
  return apiClient.post(ApiConfig.COMIC.GET_BOOKMARK + `${idUser}`)
}
//GetComment Function
export function GetComment(idComic: string) { 
 return apiClient.post(ApiConfig.COMIC.GET_COMMENT +  `${idComic}` )
}
//PostComment Function
export function PostComment(idComic: string, contentPost: string){
  return apiClient.post (ApiConfig.COMIC.POST_COMMENT+ `${idComic}/${contentPost}`)
}
