import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { deleteAccount } from "../../redux/actions/accountActions";
import { useDispatch } from "react-redux";
import ConfirmationModal from "../../components/ConfirmationModal";

const Account = ({ navigation, item }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{item.name}</Text>
      <ConfirmationModal
        title="Are you sure you want to delete this category ?"
        deleteAction={() => dispatch(deleteAccount(item.slug))}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View style={styles.buttonContainer}>
        <AntDesign
          name="edit"
          size={24}
          color="green"
          onPress={() => navigation.navigate("EditAccount")}
        />
        <AntDesign
          name="delete"
          size={24}
          color="red"
          onPress={() => setModalVisible(true)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderColor: "blue",
    borderWidth: 1,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    marginBottom: 10,
    borderRadius: 12,
  },
  item: {
    padding: 5,
    marginVertical: 2,
    flex: 3,
  },
  buttonContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
  },
});

export default Account;
