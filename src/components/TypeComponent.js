import React, { useState } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const TypeComponent = () => {

    const [text, setText] = useState('');
    const [isRecording, setIsRecording] = useState(false);

    const startRecording = () => {
        // Logic to start recording
        setIsRecording(true);
        // Alert.alert('Recording started');
    };

    const stopRecording = () => {
        // Logic to stop recording
        setIsRecording(false);
        Alert.alert('Recording stopped');
    };

    const onChangeText = newText => {
        // Update text input
        setText(newText);
    };

    return (

        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Type your message here..."
                editable={!isRecording} // Disable editing while recording
                multiline
                underlineColor="transparent" // Remove the default underline
                mode="outlined" // Optional: For a consistent border style
            />
        </View>

    )
}

const styles = StyleSheet.create({ 
    container: {
        borderWidth: 0,
        borderColor: '#ccc',
         borderRadius: 0,
        backgroundColor: '#f9f9f9',
        paddingTop:10
        
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
    },
    input: {
        fontSize: 16,
        color: '#000',
        backgroundColor: '#fff',
        borderRadius: 60,
        borderWidth: 0,
        borderColor: '#ddd',
        // padding: 1,
        minHeight: 70,
        textAlignVertical: 'top', // Ensures text starts at the top
        // marginBottom: 1,
    },
});