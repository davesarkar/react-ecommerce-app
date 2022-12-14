import React from "react";
import {View,Text,TouchableOpacity,ScrollView} from 'react-native'
import SingleProduct from "./sideComponents/SingleProduct";
const Home =()=>{
    const data=[{
        name:"Headphones",
        price:"10"
    },
    {
        name:"Speakers",
        price:"50"
    },
    {
        name:"Mobile",
        price:"100"
    },
    {
        name:"Laptop",
        price:"200"
    }
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