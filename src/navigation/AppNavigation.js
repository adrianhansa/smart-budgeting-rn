import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/users/Login";
import Register from "../screens/users/Register";
import Expenses from "../screens/expenses/Expenses";
import AddExpense from "../screens/expenses/AddExpense";
import EditExpense from "../screens/expenses/EditExpense";
import Accounts from "../screens/accounts/Accounts";
import AddAccount from "../screens/accounts/AddAccount";
import EditAccount from "../screens/accounts/EditAccount";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ExpensesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Expenses} name="ExpensesScreen" />
      <Stack.Screen component={AddExpense} name="AddExpenseScreen" />
      <Stack.Screen component={EditExpense} name="EditExpenseScreen" />
    </Stack.Navigator>
  );
};

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Accounts} name="Accounts" />
      <Stack.Screen component={AddAccount} name="AddAccount" />
      <Stack.Screen component={EditAccount} name="EditAccount" />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Register} name="Register" />
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="AuthTab" component={AuthStack} />
        <Tab.Screen name="ExpensesTab" component={ExpensesStack} />
        <Tab.Screen name="AccountsTab" component={AccountStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
