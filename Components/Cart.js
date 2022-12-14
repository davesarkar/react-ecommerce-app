import React from "react";
import {View,Text,TouchableOpacity} from 'react-native'

const Cart =({route})=>{
    const data= route.params.data
    const count= route.params.count
    return(
        <View>
            <Text>{count}</Text>
        </View>
    )
}

export default Cart