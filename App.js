import React , { Component } from 'react' ;
import {Dimensions ,YellowBox, Button, Platform,  StyleSheet, Text, TouchableOpacity, View, Image, ScrollView} from 'react-native';
//import {NavigatorBar} from 'navigationbar-react-native';
   const SCREEN_WIDTH = Dimensions.get('window').width;
   const SCREEN_HEIGHT = Dimensions.get('window').height;


export default class App extends React.Component {
  




  render() {






  const img = 'https://misiki.in/images/dishes/veg%20biryani-1510458932889.jpg'
   const name = 'misiki'
   const rate = 60
   const restaurant = 'neha'
   const stock = 5
   const time = '7-9'
   const type = 'v'
   
// IF condition
    const food_Veg = <Image 
    style={{height:40,width:40,marginRight:0}}
    source={{uri :  'https://www.misiki.in/veg.png'}}/>;

    const food_Nonveg = <Image style={{height:40,width:40,marginRight:0}}
    source={{uri : 'https://www.misiki.in/non-veg.png'}}/>;


    let food;
    if (type == 'v'){
      food = food_Veg
    } else {
      food = food_Nonveg
    }



    return (
           <ScrollView style={styles.container}>
            <View style={styles.top}>
                  <Text style={styles.deliveryStyle}>hiuu</Text>
                  <Image
                    source ={{uri:'https://www.vegrecipesofindia.com/fruit-custard-mixed-fruit-custard/'}}
                    resizeMode = {"contain"} 
                    style={
                      {
                        width: '100%',
                        height: 314,
                      }
                    }
                  >
                  </Image>
                  
              </View>

              <View style={styles.top1}>
                        <Text style={styles.slugStyle}>
                          By Neha ka Rasoi
                        </Text>
                        <Text style={styles.stockStyle}>
                            Only 5 left
                          </Text>
                        
              </View>
              
              <View style={styles.center}>
                 
              <Text style={styles.chocoStyle}>
                         Alu Paratha (2nos) 
                      </Text>
                      
                      <View style={styles.buttom}>  
                    <View style={styles.imagelogo}>
                      {food}  
                   </View>
                   
              </View>
              <Text style={styles.timeStyle}>
                         Expected Delivery: 7-9 PM
                      </Text>
                                    
                                           
              </View>
             
               
                

                
            </ScrollView>
    
  

                    
                       
       
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  top:{
    height:'35%',
  },
  top1:{
    height:'10%',
    width:'100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'grey',
  },
  center:{
    height:'100%',
    backgroundColor: 'grey',
    // justifyContent:'center'
    // backgroundColor:'blue',
  },
imagelogo:{
  
  width: SCREEN_WIDTH * 0.2,
  height: SCREEN_HEIGHT * 0.3,

},

  deliveryStyle:{
    textAlign:'center',
    fontSize:20,
    backgroundColor:'green'
  },

  slugStyle:{
    
      fontSize:18,
      padding:20,
      textAlign:"left",
      color:'red',
      
    
  },
  chocoStyle: {
    fontSize:25,
    padding:20,
    color:'white',
    fontWeight: 'bold',
  },
  
  stockStyle:{
    fontSize:15,
    padding:20,
    textAlign:"right",
     alignItems:"flex-end",
  },
  buttom:{
    height:'10%',
    alignItems:'flex-end',
    backgroundColor: 'grey',
   
    // backgroundColor: 'red' , 
  },
  placeordersection: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center'
 },
 placeorder:{
  //  backgroundColor: 'blue',
   color: 'white'
 },
 timeStyle:{
   fontSize:15,
   padding:10,
   textAlign:'center',

 },

});
// skip these lines if using Create React Native App
//AppRegistry.registerComponent('scrollview' () => App);



  




