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
    name : 'ako',
    translated: 'ako',
    status: 'Confirmed'
  },
  {
    name : 'yan',
    translated: 'siya',
    status: 'Confirmed'
  },
  {
    name : 'silan',
    translated: 'sila',
    status: 'Pending'
  },
  {
    name : 'isa',
    translated: 'isa',
    status: 'Pending'
  },
  {
    name : 'yani',
    translated: 'ito',
    status: 'Pending'
  },
  {
    name : 'mapaso',
    translated: 'mainit',
    status: 'Confirmed'
  },
  {
    name : 'oras',
    translated: 'oras',
    status: 'Confirmed'
  },
  {
    name : 'kami',
    translated: 'namin',
    status: 'Pending'
  },
  {
    name : 'yagalihok',
    translated: 'gumagana',
    status: 'Pending'
  },
  {
    name : 'kallini',
    translated: 'gusto',
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
      <TouchableOpacity key ={index} style = {styles.itemContainer}>
         

          <View style = {styles.itemBody}>
            <Text style = {styles.itemsName}> {item.name}</Text>
          </View>

          <View 
            style = { [styles.itemStatus,
              {backgroundColor: item.status === 'Pending' ? '#FFEFC5': '#B5F5D1'}]}
            >
            <Text style = {[styles.statusFont, {color: item.status === 'Pending' ? '#CEA032':'#63C579'}]}> {item.status}</Text>
          </View>


      </TouchableOpacity>
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
                  <Text style = {styles.textTab,  styles.textTabActive}>{e.status}</Text>
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
    //paddingHorizontal:10,
    justifyContent: 'center',
  },
  listTab:{
    alignSelf:"center",
    marginBottom:20,
    flexDirection: "row",
    paddingHorizontal:2,
    backgroundColor:"#ebebeb",
    borderRadius:10,
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
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  textTabActive:{
    color: "#8E2835",
    fontWeight:"bold",
    fontSize:13,
  },
  itemContainer:{
    flexDirection:"row",
    paddingVertical:15,
    paddingHorizontal:20,
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
    backgroundColor: "#69C080",
    paddingHorizontal: 17,
    height:30,
    justifyContent: 'center',
    right:14,
    borderRadius:5,
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
  statusFont:{
    fontWeight:"bold"
  },

  
});
