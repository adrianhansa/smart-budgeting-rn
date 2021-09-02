import React from "react";
import { useSelector } from "react-redux";
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
import AccountDetails from "../screens/accounts/AccountDetails";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ExpensesStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Expenses} name="ExpensesScreen" />
      <Stack.Screen component={AddExpense} name="AddExpense" />
      <Stack.Screen component={EditExpense} name="EditExpense" />
    </Stack.Navigator>
  );
};

const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Accounts} name="Accounts" />
      <Stack.Screen component={AccountDetails} name="AccountDetails" />
      <Stack.Screen component={AddAccount} name="AddAccount" />
      <Stack.Screen component={EditAccount} name="EditAccount" />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Register} name="Register" />
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  const { success } = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#3c9978",
          tabBarIcon: ({ focused, color }) => {
            focused ? (color = "#3c9978") : "black";
            let iconName;
            if (route.name === "Authenticate") {
              iconName = "sign-in";
            } else if (route.name === "Expenses") {
              iconName = "money";
            } else if (route.name === "AccountStack") {
              iconName = "list-alt";
            }

            return <FontAwesome name={iconName} size={24} color={color} />;
          },
        })}
      >
        {success ? (
          <>
            <Tab.Screen name="Expenses" component={ExpensesStack} />
            <Tab.Screen name="AccountStack" component={AccountStack} />
          </>
        ) : (
          <Tab.Screen name="Authenticate" component={AuthStack} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
