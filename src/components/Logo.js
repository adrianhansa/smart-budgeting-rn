import React from "react";
import { StyleSheet, Image, View, Text, Dimensions } from "react-native";

const Logo = () => {
  return (
    <View style={styles.logo}>
      <Text style={styles.header}>Let's make your money grow!</Text>
      <Image
        source={require("../images/logo.jpg")}
        style={{ width: Dimensions.get("window").width }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: Dimensions.get("window").width,
    marginTop: 2,
  },
  header: { padding: 10, fontSize: 30, width: "100%", textAlign: "center" },
});

export default Logo;
