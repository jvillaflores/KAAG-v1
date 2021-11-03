import React, {useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  FlatList,
  Picker,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

var head = require("../../assets/learning.svg");

const listTab =[
  {
    status: 'All'
  },
  {
    status: 'Confirmed'
  },
  {
    status: 'Pending'
  },
]



const data = [
  {
    name : 'Ronaldo',
    status: 'Confirmed'
  },
  {
    name : 'Messi',
    status: 'Confirmed'
  },
  {
    name : 'Kaka',
    status: 'Pending'
  },
  {
    name : 'Lukaku',
    status: 'Pending'
  },
  {
    name : 'Mbappe',
    status: 'Pending'
  },
  {
    name : 'Ronaldo',
    status: 'Confirmed'
  },
  {
    name : 'Messi',
    status: 'Confirmed'
  },
  {
    name : 'Kaka',
    status: 'Pending'
  },
  {
    name : 'Lukaku',
    status: 'Pending'
  },
  {
    name : 'Mbappe',
    status: 'Confirmed'
  },

]

function MyContributions({ dictionary, navigation }) {

  const [status, setStatus] = useState('All')
  const [datalist, setDatalist] = useState(data)


  const setStatusFilter = status =>{

    if(status !== 'All'){ //purple and green
      setDatalist([...data.filter(e => e.status === status)])
    } else {
      setDatalist(data)
    }
    setStatus(status)
  }

  const renderItem = ({item, index}) => {
    return(
      <View key ={index} style = {styles.itemContainer}>
          <View style = {styles.itemLogo}>
            <Image
                style={styles.itemImage}
                sources = {{uri:'https://www.jeep-outfitter.com/media/catalog/product/cache/11/image/9df78eab33525d08d6e5fb8d27136e95/o/1/o101180_e509_front_i.jpg'}}
            />
          </View>

          <View style = {styles.itemBody}>
            <Text style = {styles.itemsName}> {item.name}</Text>
          </View>

          <View 
            style = { [styles.itemStatus,
              {backgroundColor: item.status === 'Pending' ? '#e5848e': '#69c080'}]}
            >
            <Text> {item.status}</Text>
          </View>


      </View>
    )
  }

  const separator = () => {
    return <View style = {{height: 1, backgroundColor: "#E6E5E5"}}/>
  }

  return (
    <SafeAreaView style = {styles.container}>
        <View style={styles.headLine}>
         <View style={styles.title}>
           <Text style={styles.textHead}> My Contributions</Text>
           <Text style={styles.textSubHead}> Dictionary</Text>
          
         </View>
       </View>
        <View style = {styles.listTab}>
          {
            listTab.map(e => (
            <TouchableOpacity 
                style = {[styles.btnTab, status === e.status && styles.brnTabActive]}
                onPress={()=> setStatusFilter(e.status)}>
                  <Text style = {styles.textTab, status === e.status && styles.textTabActive}>{e.status}</Text>
            </TouchableOpacity>
              
            ))
          }
        </View>

          <FlatList
            data = {datalist}
            keyExtractor = {(e, i) => i.toString()}
            renderItem={renderItem}
            ItemSeparatorComponent={separator}
          />

    </SafeAreaView>
  
  );
}
const mapStateToProps = (store) => ({
  dictionary: store.userState.dictionary,
});

export default connect(mapStateToProps, null)(MyContributions);

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:10,
    justifyContent: 'center',
  },
  listTab:{
    alignSelf:"center",
    marginBottom:20,
    flexDirection: "row",
  },

  btnTab:{
    width: Dimensions.get('window').width / 3.5,
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#ebebeb",
    padding:10,
    justifyContent: 'center'

  },
  textTab:{
    fontSize:16,
  },
  brnTabActive: {
    backgroundColor: "#E6838D"
  },
  textTabActive:{
    color: "#fff"
  },
  itemContainer:{
    flexDirection:"row",
    paddingVertical:15
  },
  itemLogo: {
    padding: 10
  },
  itemImage:{
    width: 50,
    height: 50,
  },

  itemBody: {
    flex:1, 
    paddingHorizontal: 10,
    justifyContent: "center"
  },

  itemsName: {
    fontWeight: "bold",
    fontSize: 16
  },
  itemStatus:{
    backgroundColor: "green",
    paddingHorizontal: 6,
    justifyContent: 'center',
    right:12,
  },
  headLine: {
    flexDirection: "column",
    //width: "100%",
    padding: 30,
    top: -20,
    height: 150,
    backgroundColor: "#8E2835",
    alignItems:"flex-start",
    justifyContent: "center",
    position:"relative"

  },
  textHead: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.25,
    position:"relative",
    alignSelf: "center",
    color: "white",
  },
  textSubHead: {
    flexDirection: "row",
    fontSize: 13,
    letterSpacing: 0.25,
    color: "white",
  },
  title: {
    top: 40,
    //left: 110,
  },

  
});
