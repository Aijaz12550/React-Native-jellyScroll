import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList
} from 'react-native';

declare const global: {HermesInternal: null | {}};

const App = () => {
  let arr:Number[] = [1,2,3,4,5,6,7,8]
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#296"  />
      <SafeAreaView style={styles.container}>
       
         <FlatList
         data={arr}
         renderItem={({item})=>(
           <TouchableOpacity style={styles.card}>
           <Text>
               hjhjhgjgh
           </Text>
         </TouchableOpacity>
         )}
         keyExtractor = {(item)=>JSON.stringify(item)}
         />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  card:{
    borderColor: "#eee",
    borderWidth: 1,
    minHeight: 250,
    width: 350,
    backgroundColor: "#296",
    marginTop: 20,
    marginBottom: 20,


  }
})
export default App