import React from "react";
import { View } from "react-native";

function Column({ children}) {
    const colStyles = {
        flexDirection: "column",
        flex:1,
        gap: 15,
        columnGap: "30",
        
    };
    return (
        <View style={colStyles}>
            {children}
        </View>
    );
}

export default Column;