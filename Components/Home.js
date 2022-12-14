import React from "react";
import {View,Text,TouchableOpacity,ScrollView} from 'react-native'
import SingleProduct from "./sideComponents/SingleProduct";
const Home =()=>{
    const data=[{
        name:"xyz",
        price:"$10"
    },
    {
        name:"xy",
        price:"$13"
    },
]
    return(
        <ScrollView>
            <View>
                {
                    data.map((item,index)=>{
                        return(
                            <SingleProduct key={index} data={item}></SingleProduct>
                        )
                        
                    })
                }
            
           
        </View>
        </ScrollView>
        
    )
}

export default Home