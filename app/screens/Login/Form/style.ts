import AppStyles from 'app/config/styles'
import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({

  container: {
    margin: 20
  },
  TextStyle: {
    fontSize: AppStyles.fontSize.DEFAULT,
    color: AppStyles.color.COLOR_WHITE,
  },
  InputStyle: {
    color: AppStyles.color.COLOR_WHITE,
    fontSize: AppStyles.fontSize.DEFAULT,
    borderBottomColor: "#ff0000",
    borderWidth: 1
  }
})
