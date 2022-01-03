/* App config for apis
 */
const ApiConfig = {
  BASE_URL: 'http://192.168.1.6:3000/',
  USER :{
    LOGIN: 'api/users/login',
    LIST_POST:'api/users/comic/id',
    CREATE:'api/users/create'
  },
  Image:{
    Cover:'api/image/image/1/',
    AvatarImage:'api/image/image/2/',
    ChapterImage:'api/image/image/0/'
  },
  COMIC:{
    lIST_COMIC:'api/comic/get/',
    COMIC_INFO:'api/comic/',
    COMIC_CALL:'api/comic/all',
    SEARCH_AUTHOR:'api/comic/search/author',
    SEARCH_NAME :'api/comic/search/name',
    BOOKMARK:'api/comic/bookmark/',
    GET_BOOKMARK:'api/comic/get/bookmark/',
    LIKE:'api/comic/like',
    CREATE:'api/comic/create',
    UPDATE:'api/comic/update',
    UPLOAD_COVER:'api/comic/upload/cover',
    DELETE:'api/comic/delete/hard',
    GET_COMMENT:'api/comic/comment/get',
    POST_COMMENT: 'api/comic/comment/post',
    POST_REVIEW:'api/comic/review/post',
    GET_REVIEW:'api/comic/review/get', 
  }, 
  CHAPTER:{
    LIST_CHAPTER:'api/chapter/list/'
  }
};
export default ApiConfig;
