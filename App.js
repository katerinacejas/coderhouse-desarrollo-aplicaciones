import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, SafeAreaView} from 'react-native';
import { miEstilo } from './styles';

const Separator = () => <View style={miEstilo.separator} />;

export default function App() {
  return (
    <SafeAreaView style={miEstilo.container}>
        <View style={miEstilo.view_boton_textinput}>
			<TextInput 
				placeholder = "Ingrese un item"
				style={miEstilo.text_input}
			/> 
			<Button //TouchableOpacity es otra opcion para activar estilos
				// si en vez de Button pongo TouchableOpacity, descomento esto  style={miEstilo.boton}
				title="Agregar"
			/>
        </View>
		<View style={miEstilo.viewContainerItems}>
			<View style={miEstilo.textContainers}><Text style={miEstilo.texto_items}>Item 1</Text></View>
			<View style={miEstilo.textContainers}><Text style={miEstilo.texto_items}>Item 2</Text></View>
			<View style={miEstilo.textContainers}><Text style={miEstilo.texto_items}>Item 3</Text></View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
