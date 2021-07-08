import React,{useState} from 'react'
import {View, ActivityIndicator} from 'react-native'
import AppStyles from 'app/config/styles'
import {DotIndicator} from 'react-native-indicators'
interface Param {
isLoading :boolean
}
const LoadingIndicator = (param:Param) => {
return (
        <View style={{height:20}}>{(param.isLoading)?(
                <>
                <DotIndicator  count ={3} color={AppStyles.color.COLOR_WHITE} size={10}/>
                </>
        ):(<></>)}
         
        </View>
)
}
export default LoadingIndicator