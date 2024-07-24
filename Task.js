import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function Task(props){
    // const [task,setTask] = useState();
    // const [editTask,setEditTask] = useState(null);

    // const editingTask = (task)=>{
    //     setEditTask(task)
    //     setTask(task.title)
    // }
    return(
        <View style={styles.container}>
            <View style = {styles.items}>
                <View style={styles.box}></View>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <View style={styles.circle}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0a0025',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        // marginTop: 5
    },
    items:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    text:{
        fontSize : 15,
        color: '#ff92a5',
        maxWidth: '80%'
    },
    box:{
        width: 24,
        height: 24,
        backgroundColor: 'skyblue',
        opacity: 0.4,
        margin: 2,
        borderRadius: 5,
        marginRight:10
    },
    circle: {
        width: 24,
        height:24,
        borderColor: 'skyblue',
        borderWidth: 2,
        borderRadius: 20,
        opacity:0.6
    },
})

export default Task;