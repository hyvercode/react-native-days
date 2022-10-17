import React from "react";
import { PropsWithChildren } from "react";
import { View,Text } from "react-native";

const HandlingTouches: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
    return(
        <View>
            <Text>{title}</Text>
            {children}
        </View>
    )
}

export default HandlingTouches;