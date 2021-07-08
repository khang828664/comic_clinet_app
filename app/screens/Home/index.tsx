import React, { useEffect, useState } from "react";
import { View, Text } from 'react-native';
import { Button, Searchbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { loadComicAction, searchComicAction } from 'app/store/actions/ComicActions'
import { IComicListState } from 'app/models/reducers/comicLoad'
import { IComicSearchState } from 'app/models/reducers/comicSearch'
import { ILoading } from 'app/models/reducers/loading'
import styles from './styles';
import { MostView } from './component'
import AppStyles from "app/config/styles";
interface limit {
  start: number,
  number: number
}
interface stateType {
  listComicReducer: IComicListState
  loadingReducer: ILoading
  searchComicReducer: IComicSearchState
}
const Home: React.FC = () => {
  const listComic = useSelector((state: stateType) => state.listComicReducer.comicList)
  const listSearchName = useSelector((state: stateType) => state.searchComicReducer.comicSearchName)
  const listSearchAuthor = useSelector((state: stateType) => state.searchComicReducer.comicSearchAuthor)
  const isLoadData = useSelector((state: stateType) => state.loadingReducer.isLoading)
  const loadingSuccess = useSelector((state: stateType) => state.listComicReducer.loadSuccess)
  const [limit, setLimit] = useState<limit>({ start: 0, number: 10 })
  const [searchResult, setSearchResult] = useState("")
  const [onScroll, setOnScroll] = useState(false)
  const [onSearch, setOnSearch] = useState(false)
  const [reachEnd, setReachEnd] = useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadComicAction.requestLoadComic(limit.start, limit.number))
  }, [limit])
  useEffect(() => {
    return () => {
      dispatch(loadComicAction.clearList())
      dispatch(searchComicAction.clearList())
    }
  }, [])
  const updateLimit = () => {
    let newLimit: limit = { start: 0, number: 0 }
    newLimit.start = limit.start + limit.number
    newLimit.number = limit.number
    setLimit(newLimit)
  }
  // refesh
  const onRefesh = async () => {
    dispatch(loadComicAction.clearList())
    setLimit({ start: 0, number: 10 })
  }
  // search function
  const search = () => {
    if (searchResult.length > 0) {
      setOnSearch(true)
      dispatch(searchComicAction.requestLoadComic(searchResult))
    } else { setOnSearch(false) }
  }
  useEffect(() => {
    if (searchResult.length > 0) {
      search()
    } else {
      setOnSearch(false)
    }
  }, [searchResult])
  return (
    <View style={styles.container}>
       <Searchbar
        placeholder="Type title or author ..."
        onChangeText={(text) => setSearchResult(text)}
        style={{
          paddingTop:20,
          backgroundColor:"#000",
        }}
        value={searchResult}
        onSubmitEditing={() => {
        search()
        }}
      />
      <View style={styles.flatContainer}>
        {(onSearch) ? (<>
          <View style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
            <Text style={{
              fontSize: AppStyles.fontSize.MEDIUM,
              color: "#fff",
              fontFamily:'fantasy'
            }}>
              BY NAME</Text>
          </View>
          <MostView
            data={listSearchName}
            horizontal={true}
            onEndReached={updateLimit}
            onScrollStart={() => setOnScroll(true)}
            onScrollEnd={() => setOnScroll(false)}
            isLoading={isLoadData}
            key={"1"}
          />
          <View style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
            <Text style={{
              fontSize: AppStyles.fontSize.MEDIUM,
              color: "#fff",
              fontFamily:'fantasy'
            }}>
              BY AUTHOR</Text>
          </View>
          <MostView
            data={listSearchAuthor}
            horizontal={true}
            onEndReached={updateLimit}
            onScrollStart={() => setOnScroll(true)}
            onScrollEnd={() => setOnScroll(false)}
            isLoading={isLoadData}
            key={"3"}
          />
        </>) : (
          <MostView
            key={"2"}
            onRefresh={onRefesh}
            data={listComic}
            horizontal={false}
            number={2}
            onEndReached={updateLimit}
            onScrollStart={() => setOnScroll(true)}
            onScrollEnd={() => setOnScroll(false)}
            isLoading={isLoadData}
          />
        )}

      </View>
      {/* {!onScroll ? (<Searchbar
        placeholder="Type title or author ..."
        onChangeText={(text) => setSearchResult(text)}
        style={{
          backgroundColor: "black",
          position: "absolute",
          top: 0
        }}
        value={searchResult}
        onSubmitEditing={() => {
          search()
        }}
      />) : (<></>)} */}
     
    </View>
  );
};
export default Home;
