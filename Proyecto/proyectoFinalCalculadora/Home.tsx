import React, { Component } from "react";
import { Alert, Dimensions, SafeAreaView, StyleSheet, Text, View , Button} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

// create class component of App
export default class Home extends Component {

    CalcIcon () {
        return (
            <View style={styles.iconContainer}>
                <Text>
                    <Icon name="calculator" size={50} color="#D191FD" />
                </Text>
            </View>
        );
    };

   render() {
     return (
       <View style={styles.container}>
         {/* Status bae here */}
         <SafeAreaView>
             <Text style={styles.value}>
                
             {this.CalcIcon()}
             </Text>
            <Button
            title="Calculadora"
            onPress={() => navigation.navigate('AppCalc')}
            />
            

        
            
         </SafeAreaView>
       </View>
     );
   }
 }

 const screen = Dimensions.get("window");
 const buttonWidth = screen.width / 4;
 // create styles of app
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#9FFD91",
     justifyContent: "center",
   },
   value: {
     color: "#D191FD",
     fontSize: 42,
     textAlign: "center",
     marginRight: 20,
     marginBottom: 10,
   },
   boton : {
     alignItems: "center",
     justifyContent: "center",
     borderRadius: Math.floor(buttonWidth),
     margin: 5,
    
     textAlign: "center",
   },
   iconContainer: {
    marginTop: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  

 });


  
