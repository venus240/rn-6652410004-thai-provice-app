import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FONTS } from "../constants/theme";

export default function PinkHeader({ title }: { title: string }) {
    return (
        <LinearGradient
            colors={["#E91E63", "#F06292"]}
            style={styles.header}
        >
            <Text style={styles.title}>{title}</Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 25,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    title: {
        color: "white",
        fontSize: 22,
        fontFamily: FONTS.bold,
    },
});