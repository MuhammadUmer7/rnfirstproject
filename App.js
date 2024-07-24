import React, {useState} from "react";

import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    Keyboard,
} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import Task from "./Task";

function App(){
    const [task,setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const addTask = ()=>{
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
    } 

    const completeTask = (index)=>{
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index,1);
        setTaskItems(itemsCopy,{id: Date.now().toString()});
    }

    return(
        <SafeAreaView>
            <View style = {styles.container}>
                <Text style = {styles.text}>TODAY'S TASK</Text>
                <View style={styles.tasks}>
                    {
                        taskItems.map((item, index)=>{
                           return(<TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                               <Task  text={item}/>
                           </TouchableOpacity>) 
                        })
                    }
                </View>
                <KeyboardAvoidingView behavior={"height"} style={styles.keyboardView}>
                    <TextInput style={styles.input} placeholder={"Write new Task"} value={task} onChangeText={text => setTask(text)}/>
                    <TouchableOpacity onPress={()=> addTask()}>
                        <View style={styles.add}>
                           <Text style={styles.addText}>➕</Text>                 
                        </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#0a0025',
        // alignItems: "center",
        margin: 20
    },
    text:{
        marginTop: 50,
        color: '#23d170',
        // color: '#ff92a5',
        fontSize: 20,
        fontWeight: 'bold',
    },
    tasks:{
        marginTop: 20,
    },
    keyboardView:{
        position:'absolute',
        top: 660,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input:{
        paddingVertical: 15,
        paddingHorizontal: 15,
        width: 250,
        borderRadius: 60,
        backgroundColor: '#0a0025',
        borderColor: 'skyblue',
        borderWidth: 0.5,
        // padding: 10,
    },
    add:{
        width: 60,
        height: 60,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0a0025',
        borderColor: 'skyblue',   
        borderWidth: 0.5,

    },
    addText:{

    },
});

export default App;
