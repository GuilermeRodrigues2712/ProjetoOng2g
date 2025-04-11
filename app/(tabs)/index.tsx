import { Image, View, StyleSheet, Text } from "react-native";

export default function Home (){
    return(
        <View style={style.container}>
        <Image
        source={require('../../assets/images/2g.png')}
        style={{
          height: 200,
          width: 200
        }}
        resizeMode='contain'
        />
        <Text style={style.title}>Organização de Serviços Socias 2G!</Text>
        <Text>Ajudar faz bem!</Text>
  
  
      </View>
    )
}
const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 16
    },
  
    title:{
      fontWeight: 'bold',
      fontSize: 22,
      marginTop: 8
    }
  })