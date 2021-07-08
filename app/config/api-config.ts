/* App config for apis
 */
const ApiConfig = {
  BASE_URL: 'http://192.168.1.3:3000/',
  USER :{
    LOGIN: 'api/users/login',
    LISTPOST:'api/users/comic/id',
    CREATE:'api/users/create'
  },
  Image:{
    Cover:'api/image/image/1/',
    AvatarImage:'api/image/image/2/',
    ChapterImage:'api/image/image/0/'
  },
  COMIC:{
    lISTCOMIC:'api/comic/get/',
    COMICINFO:'api/comic/',
    COMICALL:'api/comic/all',
    SEARCHAUTHOR:'api/comic/search/author',
    SEARCHNAME :'api/comic/search/name',
    BOOKMARK:'api/comic/bookmark/',
    GETBOOKMARK:'api/comic/get/bookmark/',
    LIKE:'api/comic/like',
    CREATE:'api/comic/create',
    UPDATE:'api/comic/update',
    UPLOADCOVER:'api/comic/upload/cover',
    DELETE:'api/comic/delete/hard'
  }, 
  CHAPTER:{
    LISTCHAPTER:'api/chapter/list/'
  }
};
export default ApiConfig;
