import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CartItem from "../redux/CartItem";
import { useSelector, useDispatch } from "react-redux";

const Cart = ({ route }) => {
    const data = route.params.data;
    const count = route.params.count;
    let total = useSelector((state)=> state.cart.total)
    let items = useSelector((state) => state.cart.cart);
    // console.log(items)
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
                <Text>Name</Text>
                <Text>Price</Text>
                <Text>Quantity</Text>
                <Text>Action</Text>
            </View>
            {
                items.map((x,i)=>{
                    return(
                <CartItem key={i} data={x.data} count={x.count}></CartItem>
                    )
                })
            }
                {/* <CartItem data={data} count={count}></CartItem> */}
                <Text style={{margin:15}}>Total : {total}</Text>
        </View>
    );
};

export default Cart;
