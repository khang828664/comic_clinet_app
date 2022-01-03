import AppStyles from 'app/config/styles'
import { StyleSheet, useWindowDimensions } from 'react-native'
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: "20%"
  },
  inputForm: {
    flex: 1,
    padding: "2%",
  },
  Title: {
    fontSize: 30,
    fontWeight: "bold",
    color: AppStyles.color.COLOR_GREEN
  }
})
