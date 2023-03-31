import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from "react-native";
import database from "../config";
export default class NewTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            desc: '',

        }
    }

    addTask=()=>{
        database.collection("Tasks").add({
            description:this.state.desc,
            status:false
        }); this.props.navigation.navigate("Task")
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}> Digite sua tarefa </Text>
                <TextInput style={styles.input}
                    placeholder="Fazer tarefas"
                    onChangeText={(desc) => { this.setState({ desc }) }}
                    value={this.state.desc} ></TextInput>
                <TouchableOpacity style={styles.buttonNewTask}
                    onPress={() => { this.addTask() }}>
                    <Text style={styles.iconButton}> + </Text>
                </TouchableOpacity>
            </View>
        )
    }

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