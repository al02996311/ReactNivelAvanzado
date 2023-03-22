import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppCalc from './AppCalc';

function HomeScreen({ navigation }) {
    const iconStyle = {
        color: "#D191FD",
        marginBottom: 16,
    };
    const homeStyle = {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: "#9FFD91",        
        textAlign: 'center',   
    };
    return (
        <View style={homeStyle}>
            <Text style = {iconStyle}>
                <Icon name="calculator"  size = {50}/>
            </Text>
            <Button
                title="Calculadora"
                onPress={() => navigation.navigate('Calculadora')}
                color = "#D191FD"
            />
        </View>
  );
}

function CalculadoraScreen({ navigation }) {
    return (
        <AppCalc />
    );
}

const Stack = createNativeStackNavigator();
  
 function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Calculadora" component={CalculadoraScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;