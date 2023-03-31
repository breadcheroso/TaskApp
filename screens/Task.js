import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert } from "react-native";
import database from "../config"
import { MaterialIcons } from "@expo/vector-icons"




export default function Task ({navigation}){
    const[task,setTask]=useState([])

    function deleteTask(id){
        Alert.alert(
            "Deletar",
            "Tem certeza que deseja deletar?",
            [
                {
                    text:"Cancelar",
                    onPress: ()=>{
                        return;
                    },
                    style:"cancel",                 
                },
                {
                    text:"Okay",
                    onPress: ()=>{
                        database.collection("Tasks").doc(id).delete()
                    }
                },
            ],
            {cancelable:false}
        )
    }

    useEffect(()=>{
     database.collection("Tasks").onSnapshot((query)=>{
        const list = []
        query.forEach((doc)=>{
            list.push({...doc.data(),id:doc.id})
        })
    setTask(list)   
     })
    },[])


return(
    <View style={styles.container}>
      <FlatList
      showsVerticalScrollIndicator={false}
      data={task}
      renderItem={({item})=>{
        return(
            <View style={styles.tasks}>
                <Text style={styles.descriptionTask} onPress={()=>{
                    navigation.navigate("Details",{id:item.id,description:item.description})
                }}> {item.description} </Text>
                <TouchableOpacity style={styles.deleteTask}
                onPress={()=>{deleteTask(item.id)}}>
                    <MaterialIcons name="delete-forever"
                    size={25}
                    color="#f64372"/>
                </TouchableOpacity>
            </View>
        )
      }}/>
      <TouchableOpacity style={styles.buttonNewTask}
      onPress={()=>{navigation.navigate("NewTask")}}>
        <Text style={styles.iconButton}> + </Text>
      </TouchableOpacity>
    </View>
)
    }
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20,
    },
    buttonNewTask:{
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 30,
        left: 20,
        backgroundColor: "#f92e6a",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    iconButton:{
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold",
    },
    tasks:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
    },
    deleteTask:{
        justifyContent: "center",
        paddingLeft: 35,
    }
})