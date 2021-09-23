import React from "react";
import { StyleSheet, Text, View, Image,Button,TouchableOpacity, Pressable } from "react-native";
import profileimg from "./assets/raf.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={profileimg} style={styles.profile} />
      <View style={styles.containerinfo}>
        <Text style={styles.label}>School</Text>
        <Text>CodeTrain Ghana</Text>
      </View>
      <View style={styles.containerinfo}>
        <Text style={styles.label}>Email Address</Text>
        <Text style={styles.info}>Rafiqueacudjoe@gmail.com</Text>
      </View>
      <View style={styles.containerinfo}>
        <Text style={styles.editinfolabel} >Name</Text>
        <Text style={styles.editinfo}>Rafique Adam Cudjoe</Text>
      </View>
      <View style={styles.containerinfo}>
        <Text style={styles.editinfolabel}>Nick Name</Text>
        <Text style={styles.editinfo}t>Raf</Text>
      </View>
      <View style={styles.containerinfo}>
        <Text style={styles.editinfolabel}>Emergency Contact</Text>
        <Text style={styles.editinfo}>+233 5444 13229</Text>
      </View>
      <Pressable style={styles.buttonContainer}>
        <Text style={styles.btext}>UPDATE PROFILE</Text>
        </Pressable>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginTop: 100,
    marginBottom: 20,
    alignSelf: "center",
  },
  containerinfo: {
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 50,
  },
  label: {
    color: 'grey',
    marginBottom:5

  },
  buttonContainer:{
    borderRadius:100,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 50,
    backgroundColor: '#34b4eb',
    height:50
  },
  editinfo: {
    paddingBottom:5,
    borderBottomWidth: 0.7,
    borderColor: 'grey',
    
  },
  editinfolabel: {
    color:'#34b4eb' ,
    marginBottom:5

  },
  btext: {
    fontSize:16,
    color: 'white',
    alignSelf: 'center',
    paddingTop:15
  }
 
});
