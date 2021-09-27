import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import UploadItem from "./UploadItem";

export default function UploadList({ items, action, handleAddPhoto }) {
  const renderItem = ({ item }) => (
    <UploadItem item={item} action={action} handleAddPhoto={handleAddPhoto} />
  );

  return (
    <View>
      <FlatList
        // ItemSeparatorComponent={() => (
        //   <View style={{ width: 10, backgroundColor: "transparent" }} />
        // )}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={items}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => item.uri.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
