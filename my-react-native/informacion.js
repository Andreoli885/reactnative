import React from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView} from 'react-native';

export class Informacion extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View>
            <Text style={styles.titleText}>{this.props.country_name}</Text>
            <Text style={styles.paragraph}>{this.props.country_code}</Text>
            <Text style={styles.paragraph}>{this.props.number}</Text>
            <Text style={styles.paragraph}>{this.props.line_type}</Text> 
            </View>
        );
    }
}
const styles = StyleSheet.create({
titleText: {
    fontFamily:"Arial",
    fontSize: 25,
    padding: 20,
    textAlign: 'center',
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    textAlign: 'center',
    height: 'auto'
  },
});


export default Informacion;