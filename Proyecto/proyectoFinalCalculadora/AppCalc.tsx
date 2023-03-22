import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View , ScrollView} from "react-native";
import Button from "./componentes/botones";
import Row from "./componentes/Row";
import calculator, { initialState } from "./util/calculadora";

// create class component of App
export default class AppCalc extends Component {
  state = initialState;

  // handle tap method
  HandleTap = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  };

  // render method
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
        <ScrollView>
          <Text style={styles.value}>
            {(this.state.operationValue).toLocaleString()}
          </Text>

          {/* Do create componentRow */}
          <Row>
            <Button
              text="+"
              theme="accent"
              onPress={() => this.HandleTap("operator", "+")}
            />
            <Button
              text="-"
              theme="accent"
              onPress={() => this.HandleTap("operator", "-")}
            />
            <Button
              text="X"
              theme="accent"
              onPress={() => this.HandleTap("operator", "*")}
            />
            <Button
              text="/"
              theme="accent"
              onPress={() => this.HandleTap("operator", "/")}
            />
          </Row>
          <Row>
            <Button text="1" theme="num" onPress={() => this.HandleTap("number", 1)} />
            <Button text="2" theme="num" onPress={() => this.HandleTap("number", 2)} />
            <Button text="3" theme="num" onPress={() => this.HandleTap("number", 3)} />            
            <Button text="4" theme="num" onPress={() => this.HandleTap("number", 4)} />
          </Row>
          <Row>
            <Button text="5" theme="num" onPress={() => this.HandleTap("number", 5)} />
            <Button text="6" theme="num" onPress={() => this.HandleTap("number", 6)} />
            <Button text="7" theme="num" onPress={() => this.HandleTap("number", 7)} />            
            <Button text="8" theme="num" onPress={() => this.HandleTap("number", 8)} />
          </Row>
          <Row>
            <Button text="9" theme="num" onPress={() => this.HandleTap("number", 9)} />
            <Button text="0" theme="num" onPress={() => this.HandleTap("number", 0)} />
            <Button text=""  theme="num"  />
            <Button text=""  theme="num"  />
          </Row>
          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => this.HandleTap("clear")}
            />
            <Button text="." theme="secondary" onPress={() => this.HandleTap("number", ".")} />

          </Row>

          <Row>
            <Button
              text="="
              theme="equal"
              onPress={() => this.HandleTap("equal", "=")}
            />
          </Row>
          <Row>
            <Text style={styles.value}>
              {parseFloat(this.state.currentValue).toLocaleString()}
            </Text>
          </Row>
          </ScrollView>
        
        </SafeAreaView>
      </View>
    );
}
}

// create styles of app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
    height:"100%",
  },
  value: {
    color: "#fff",
    fontSize: 38,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});
