import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import LandingPageData from '../data/LandingPageData';



const LandingPage = ({ navigation }) => {
    const [ripple, setRipple] = useState(1)
    const changeScreen = (item) => {
      if(item == 'Cocktails') {
        navigation.navigate('CocktailsScreen');
      } else if(item == 'Drinking Games') {
        navigation.navigate('DrinkingGamesScreen');
      } else if(item == 'Mocktails') {
        navigation.navigate('MocktailsScreen');
      } else if(item == 'Eats') {
        navigation.navigate('EatsScreen');
      }
      
    }
    return(    
        <FlatGrid
        itemDimension={130}
        data={LandingPageData}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={10}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity style={[styles.itemContainer, { backgroundColor: item.code }]} 
              onPress={() => {
                  changeScreen(item.name);
                }} >
              <Text style={styles.itemName}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
        />
    )
}
const styles = StyleSheet.create({
    gridView: {
      marginTop: 10,
      flex: 1,
      backgroundColor: '#2a2b2b',
    },
    itemContainer: {
      justifyContent: 'center',
      borderRadius: 5,
      padding: 10,
      height: 150,
      margin: 20,
      alignItems: 'center',
    },
    itemName: {
      fontSize: 25,
      color: '#e38944',
      fontWeight: '900',
      fontFamily: 'Arial',
      
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
  });
export default LandingPage