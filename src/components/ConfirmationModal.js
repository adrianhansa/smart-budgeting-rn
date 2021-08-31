import React from "react";
import { Modal, StyleSheet, View, Text, Pressable } from "react-native";

const ConfirmationModal = ({
  title,
  deleteAction,
  modalVisible,
  setModalVisible,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{title}</Text>
          <View style={styles.modalButtonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.cancelButton}>Cancel</Text>
            </Pressable>
            <Pressable style={styles.deleteButton} onPress={deleteAction}>
              <Text>Delete</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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

export default ConfirmationModal;
