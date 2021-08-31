import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { deleteAccount } from "../../redux/actions/accountActions";
import { useDispatch } from "react-redux";

const Account = ({ navigation, item }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{item.name}</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you sure you want to delete this category ?
            </Text>
            <View style={styles.modalButtonContainer}>
              <Pressable
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.cancelButton}>Cancel</Text>
              </Pressable>
              <Pressable
                style={styles.deleteButton}
                onPress={() => dispatch(deleteAccount(item.slug))}
              >
                <Text>Delete</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
  modalButtonContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    width: "100%",
  },
  buttonContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cancelButton: {
    borderRadius: 7,
    padding: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: "green",
  },
  deleteButton: {
    borderRadius: 7,
    padding: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: "red",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Account;
