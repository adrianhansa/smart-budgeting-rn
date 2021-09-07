import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { deleteExpense } from "../../redux/actions/expenseActions";
import { useDispatch } from "react-redux";
import ConfirmationModal from "../../components/ConfirmationModal";
import { AntDesign } from "@expo/vector-icons";

const Expense = ({ expense, navigation }) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.description}>{expense.description}</Text>
        <Text style={styles.amount}>£ {expense.amount}</Text>
        <ConfirmationModal
          title="Are you sure you want to delete this expense ?"
          deleteAction={() => {
            dispatch(deleteExpense(expense._id));
          }}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <AntDesign
          style={{ marginRight: 10 }}
          name="edit"
          size={24}
          color="green"
          onPress={() =>
            navigation.navigate("EditExpense", { id: expense._id })
          }
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
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#347546",
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 40,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 4,
    backgroundColor: "#c8dece",
  },
  description: { fontSize: 24, color: "#347546" },
  amount: { fontSize: 24, color: "#347546" },
});

export default Expense;
