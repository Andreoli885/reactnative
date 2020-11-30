
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
//import axios from 'axios';
const axios = require("axios");
import {Informacion} from '../informacion.js';


export class InfoScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
    country_name: "",
    country_code: "",
    number: "",
    line_type: "",
    numero: "",
    numero_placeholder: "Ingrese su número"};
    this.btnConsultar = this.btnConsultar.bind(this);
   
    
  }
  

//Handler input banda
btnConsultar(text){
  this.setState({ err_description: "" });
  }
 

//Handler input Tema

traductor = function (response) {
  this.setState( {
  
    country_code: response.data.country_code,
    country_name: response.data.country_name,
    number: response.data.number,
    line_type: response.data.line_type
    
  });
  console.log(this.state)
  }
 
// Handler de Boton
handlerBtn(){
console.log(this.state.numero)

var numero = this.state.numero;
var parametros=  numero;


var url= "http://apilayer.net/api/validate?access_key=fc006320efe15253ac2b9b3f04679387&number="+parametros;

axios.get (url)
.then(response=>{
this.traductor(response)
}).catch((err) => {
  console.log(err);
});

}

// RENDER

 render(){

   
  let informacion;
  if( true){

    console.log(this.props.numero);
    informacion =  <Informacion  country_code={this.state.country_code} country_name={this.state.country_name} line_type={this.state.line_type} number={this.state.number}/> 
  
  
  }



 


         return (
          <View
           style={{
            flex: 1,
            padding: 20
          }}
          >

            
              <Text
               style={styles.titleText}
              >Busca los datos</Text>

              <TextInput  
              placeholder='Numero'
              style={styles.textIn}
              
              onChangeText ={text =>  this.setState({numero:text})}  
             />
         
              <Button color="#007AFF" onPress={this.handlerBtn.bind(this)} title="Consultar"/> 
           
            {informacion}

          </View>
             );
  
  }

 }
 export default InfoScreen;
 
 //Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    textAlign: 'center',
    height: 'auto'
  },
textIn:{

  height: 40, 
  borderColor: 'gray', 
  borderWidth: 1, 
  margin:3 
},

titleText: {
  fontFamily:"Arial",
  fontSize: 25,
  padding: 20,
  textAlign: 'center',
}

});