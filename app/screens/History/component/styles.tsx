import AppStyles from 'app/config/styles'
import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get("window")
export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#000"
  },
  itemContainer: {
    flex: 1/2,
    margin: 5,
    width:width/2,
    height:height/2.5
  },
  subItemContainer: {
    position: "absolute",
    right: 0,
    left: 0,
    justifyContent: 'space-between',
    backgroundColor: "rgba(0,0,0,0)",
    padding: "5%",
    flexDirection: "row",
  },
  subIndexTextStyle: {
    fontFamily: "fantasy",
    color: "#fff",
    fontSize: AppStyles.fontSize.DEFAULT
  },
  subAuthorTextStyle: {
    fontFamily: "fantasy",
    color: "#fff",
    fontSize: AppStyles.fontSize.EXSMALL
  },
  subNameTextStyle: {
    fontFamily: "fantasy",
    color: "#fff",
    fontSize: AppStyles.fontSize.DEFAULT
  },
  subContentContainer: {
    flex: 1,
    padding: 2
  },
  search: {
    backgroundColor: "#000",
  },
  subSearchBarHorizontal: {
    position: "absolute",
    left: 0,
    right: 0,
  }
})
