import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
//import Colors from "../../shared/theme/Colors";
//import { isTablet, widthD, heightD } from "../../shared/theme/Helpers";
//import { RFValue } from "react-native-responsive-fontsize";
//import { blue100 } from "react-native-paper/lib/typescript/styles/colors";

export default function UploadItem({ item, action, handleAddPhoto }) {
  return (
    
    <TouchableOpacity
    style={item.role ? styles.upload : styles.product}
    //   onPress={() => action(item)}
    activeOpacity={1}
  >
    {/* <View style={styles.product}> */}
    {item.role ? (
      <View style={{ ...styles.product__imageContainer, padding: 10 }}>
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <AntDesign name="pluscircle" size={RFValue(30)} color="black" />
          <Text style={{ fontSize: RFValue(14) }}>Add another</Text>
        </View>
        <TouchableOpacity
          style={styles.upload__addButton}
          onPress={handleAddPhoto}
        >
          <Text style={{ fontSize: RFValue(16) }}>Add</Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View style={styles.product__imageContainer}>
        <Image
          resizeMode="cover"
          style={{ height: "100%", width: "100%" }}
          source={{ uri: item.uri }}
        />
      </View>
    )}

    {/* </View> */}
  </TouchableOpacity>
      )}




const styles = StyleSheet.create({
  product: {
     height: 200,
    //height: widthD / 1.8,
    // width: 182,
    width: "48%",
    // borderWidth: 0.8,
    // borderColor: "lightgray",
    marginBottom: 10,
  },
  upload: {
     height: 200,
    //height: widthD / 1.8,
    // width: 182,
    width: "48%",
    borderWidth: 1,
    //borderColor: Colors.primary,
    //borderColor: blue100,
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 10,
    backgroundColor: "rgba(244, 186, 37, 0.1)",
  },
  product__imageContainer: {
    flex: 1,
    // backgroundColor: "#e6e6e6",
  },
  product__info: {
    flex: 0.3,
    padding: 5,
  },
  product__size: {
    opacity: 0.5,
  },
  product__price: {
    fontWeight: "bold",
  },
  upload__addButton: {
    borderStyle: "dashed",
    //borderColor: Colors.primary,
    //borderColor: blue100,
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: "center",
  },
});
