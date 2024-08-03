import React from "react";
import { StyleSheet, Text, View,Image,ImageBackground } from "react-native";


const Header = ({ title, navigation }) => {
  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
    <View style={styles.header}>
      <View style={styles.headerTitle}>
        <Image source={require("../assets/heart_logo.png")} style={styles.headerImage}/>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
  headerTitle: {
    flexDirection: 'row'
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10
  },
});

export default Header;
