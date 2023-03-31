import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Task from "./screens/Task"
import NewTask from "./screens/NewTask"
import Details from "./screens/Details"

const Stack = createStackNavigator()

export default function App(){
 return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Task">
      <Stack.Screen name="Task"component={Task}/>
      <Stack.Screen name="NewTask"component={NewTask}/>
      <Stack.Screen name="Details"component={Details}/>
    </Stack.Navigator>
  </NavigationContainer>
 )
}