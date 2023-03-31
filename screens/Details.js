import React, { Component, useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from "react-native";
import database from "../config";
export default function Details({ navigation, route }) {
    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
    const idTask = route.params.id
    function editTask(description, id){
        database.collection("Tasks").doc(id).update({description:description})
        navigation.navigate("Task")
    }


    return (
        <View style={styles.container}>
            <Text style={styles.label}> Editar tarefa </Text>
            <TextInput style={styles.input} onChangeText={setDescriptionEdit} value={descriptionEdit}/>
            <TouchableOpacity style={styles.buttonNewTask} onPress={()=>{
                editTask(descriptionEdit, idTask)
            }}>
                <Text style={styles.iconButton}> + </Text>
            </TouchableOpacity>
        </View>
    )

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20
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
        alignItems: "center"
    },
    iconButton:{
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold"
    },
    label:{
        width: '90%',
        marginTop: 20,
        fontSize: 16,
        marginLeft: 20,
        color: "#f92e64"
    },
    input:{
        width: "90%",
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#f92e64",
        marginLeft: "auto",
        marginRight: "auto"
    },
})