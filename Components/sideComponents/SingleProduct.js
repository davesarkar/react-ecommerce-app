import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { decrement, increment } from "../../redux/counterSlice";
import { addToCart } from "../../redux/cartSlice";
const SingleProduct = (props) => {
    const data = props.data;
    const [count,setCount]= useState(0)
    const navigation = useNavigation();
    // const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const Counter = () => {
        return (
            <View style={{ flexDirection: "row", margin: 2 }}>
                <TouchableOpacity
                    onPress={() => {
                        // dispatch(increment());
                        setCount(count + 1)
                    }}
                >
                    <Text style={{ fontSize: 30, margin: 4 }}>+</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 25, margin: 4 }}>{count}</Text>
                <TouchableOpacity
                    onPress={() => {
                        // dispatch(decrement());
                        setCount(count - 1)
                    }}
                >
                    <Text style={{ fontSize: 30, margin: 4 }}>-</Text>
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <View
            style={{
                alignItems: "center",
                justifyContent: "center",
                margin: 10,
            }}
        >
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                    style={style.Ima}
                    source={require("../../assets/favicon.png")}
                ></Image>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text style={{ margin: 10 }}>{props.data.name}</Text>
                <Text style={{ margin: 10 }}>Price:{props.data.price}</Text>
            </View>
            <Counter></Counter>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity
                    style={{ backgroundColor: "green", width: "100%" }}
                    onPress={() => {
                        dispatch(addToCart({ data: data, count: count }));
                        navigation.navigate("Cart", {
                            data: data,
                            count: count,
                        });
                    }}
                >
                    <Text style={{ padding: 5 }}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const style = StyleSheet.create({
    Ima: {
        height: 200,
        width: 200,
    },
});

export default SingleProduct;
