import AppStyles from "app/config/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.9)"
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#000',
    padding: "5%"
  },
  submitButton: {
    backgroundColor: AppStyles.color.COLOR_BLUE_LOW,
    height: "10%",
    justifyContent:"center",
    alignItems:"center",
    marginVertical :"2%"
  },
  submitText: {
    fontFamily: "fantasy",
    fontWeight:"bold",
    fontSize:AppStyles.fontSize.MEDIUM
  },
  textStyle: {
    color: AppStyles.color.COLOR_WHITE,
    fontFamily: "fantasy",
  },
  inputStyle: {
    borderBottomColor: AppStyles.color.COLOR_BLUE_LOW,
    borderWidth: 2,
    color: AppStyles.color.COLOR_WHITE
  },

})
