import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert, TextInput } from 'react-native';
import { GlobalStyles } from '../../constants/GlobalStyles';
import { useNavigation } from '@react-navigation/native';

export default function CreateAccount() {
  const navigation = useNavigation();
    
  return (
    <View style={GlobalStyles.container}>
      <Text style={{fontWeight: 'bold'}}>Create Account</Text>
        
        <View style={GlobalStyles.container}>
          <Text style={{fontWeight: 'bold'}}>Email</Text>
            <TextInput style={GlobalStyles.input}/>
            <Text style={{fontWeight: 'bold'}}>Username</Text>
            <TextInput style={GlobalStyles.input}/>
            <Text style={{fontWeight: 'bold'}}>Password</Text>
            <TextInput secureTextEntry={true} style={GlobalStyles.input}/>
            <Text style={{fontWeight: 'bold'}}>Repeat password</Text>
            <TextInput secureTextEntry={true} style={GlobalStyles.input}/>

            <Button title="Login" onPress={() => navigation.navigate("TabNav")} />
          </View>
    </View>
  );
  }
