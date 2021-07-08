import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  ImageContainer: {
    justifyContent: "flex-end",
    flex:1
  },
  InfoContainer: {
    paddingHorizontal: "2%",
    paddingVertical: "2%",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  rateContainer: {
    alignSelf: "center",
    flexDirection: "row",
    position: "absolute",
    left: 0,
    right: 0,
    top:0,
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: 3
  },
  rateTextStyle: {
    color: '#fff',
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.6)",
    flexDirection: "row",
    alignItems: "center",
  },
  continueButtonStyle: {
    backgroundColor: "#fff",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "2%"
  },
  bookmarkContainer: {

  }
})
