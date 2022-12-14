import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";

const CartItem = (props) => {
    let name = props.data.name;
    let price = props.data.price;
    let quantity = props.count;
    let dispatch = useDispatch();

    return (
        <View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: 15,
                }}
            >
                <Text>{name}</Text>
                <Text>{price}</Text>
                <Text>{quantity}</Text>
                <TouchableOpacity onPress={()=>{
                    dispatch(removeFromCart({data:props.data, count:props.count}))
                }}>
                    <Text>Remove</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CartItem;
