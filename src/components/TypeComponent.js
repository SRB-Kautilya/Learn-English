import React, { useState } from 'react'
import { View,  StyleSheet, Text, Button } from 'react-native'
import { TextInput } from 'react-native-paper';
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
        <View >
            <TextInput
                onChangeText={onChangeText}
                value={text}
                placeholder="Type your message here..."
                editable={!isRecording} // Disable editing while recording
                multiline={true}
            />
              <Button title={isRecording ? 'Stop Recording' : 'Start Recording'} onPress={isRecording ? stopRecording : startRecording} />

            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button title={isRecording ? 'Stop Recording' : 'Start Recording'} onPress={isRecording ? stopRecording : startRecording} />
                <Button title="Send" onPress={() => console.log('Sending message:', text)} />
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        padding: 15,
        backgroundColor: '#f0f0f0', // Background color of the message container
        marginBottom: 10,
        marginTop: 10,
    },
    message: {
        fontSize: 16,
        color: '#333', // Text color of the message
    },
});