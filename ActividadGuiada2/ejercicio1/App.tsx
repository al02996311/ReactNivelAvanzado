import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
const Almacenar = () => {
const [text, setText] = useState('');
return (
<View style={{padding: 10}}>
<TextInput
style={{height: 40}}
placeholder="Escribe lo que gustes!"
onChangeText={newText => setText(newText)}
defaultValue={text}
/>
<Text style={{padding: 10, fontSize: 42}}>
</Text>
</View>
);
}
export default Almacenar;