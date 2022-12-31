import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Badge } from 'react-native-paper';
import { List } from 'react-native-paper';
import cocktailsList from '../data/drinksData';
import axios from 'axios';
import IngredientObj from '../data/IngredientList'



const CocktailsScreen = () => {
    const [ingredients, setIngredients] = useState([]);
    const [cList, setCList] = useState([]);
    useEffect(() => {
        // if(ingredients.length==0) {
        //     setCList(cocktailsList);
        // }
        let cListItems = [];
        ingredients.forEach((item) => {
            let tp = IngredientObj[item];
            
            
            tp.forEach((item) => {
                cListItems.push(cocktailsList[item])
            })
        })
        // console.log(ingredients);
        setCList(cListItems)
    },[ingredients])
    let data = [
        { name: 'Vodka', color:'#931e9e'},
        { name: 'Tequila', color:'#931e9e' },
        { name: 'Whiskey', color:'#931e9e' },
        { name: 'Rum', color:'#931e9e' },
        { name: 'Gin', color:'#931e9e' },
        { name: 'Beer', color:'#931e9e' },
        { name: 'Wine', color:'#931e9e' },
        { name: 'Soda', color:'#931e9e' },
        { name: 'Coca', color:'#931e9e' },
        { name: 'Lemon', color:'#931e9e' },
    ]
    return(
        
        <View style={styles.containerStyle}>
            <View style={styles.pickerView}>
                {data.map((item)=> {
                    return(
                        <TouchableOpacity onPress={()=>{
                            if(ingredients.includes(item.name)==false) {
                                setIngredients([item.name,...ingredients])
                            } else {
                                let tmp
                                tmp = ingredients.filter((i) => {
                                    return (i!=item.name)
                                })
                                console.log(tmp)
                                setIngredients(tmp);
                            }
                            
                            }}>
                            <Badge size={30} style={ {backgroundColor:ingredients.includes(item.name)?'#129623':'#931e9e',marginTop: 10, marginBottom: 10, marginLeft:5, marginRight:5, paddingLeft:10, paddingRight:10} }>{item.name}</Badge>
                        </TouchableOpacity>
                    )
                })}
            </View>
            {/* <View>
                {ingredients.map((item)=> {
                    return(
                        <Text>{item}</Text>
                    )
                })}
            </View> */}
            <ScrollView style={{width:'100%'}}>
            {
                cList.map((item)=> {
                    return ( 
                        <TouchableOpacity>
                        <View style={styles.cardStyle} >
                            <Text style={styles.textStyle}>{item.name}</Text>  
                        </View>
                        </TouchableOpacity>
                    )
                })
            }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        backgroundColor: '#01366e',
        height: 70,
        width:'90%',
        marginTop:20,
        marginLeft:20,
        justifyContent: 'center',
        alignItems: 'center',
        padding:5,
    },
    containerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c4dcf5'
    },
    listStyle: {
        width: '100%',
        backgroundColor: '#c4dcf5'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: '900',
        color:'#edac61',
    },
    pickerContainer: {
        
    },
    pickerView: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        width:'100%',
        backgroundColor: '#6bb3ff',
    }
})

export default CocktailsScreen