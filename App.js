import { Text, View, TextInput, Button, SafeAreaView, FlatList, Modal, Alert, TouchableOpacity} from 'react-native';
import { miEstilo } from './styles';
import React, {useState} from 'react';

export default function App() {

	const[textValue, setTextValue] = useState('')
	const[itemsList, setItemsList] = useState([])
	const[itemSelected, setItemSelected] = useState({})
	const[ModalVisible, setModalVisible] = useState(false)

	const obtenerLoEscrito = (text) => setTextValue(text)

	const agregarItem = () => {
		if(textValue ===""){
			Alert.alert(
				'No ha ingresado un item', /*titulo de la alerta*/
				'Ingrese un valor', /*mensaje de la alerta*/
				[
					{text: 'OK'},
			  	]
			);
			return
		}
		/*console.debug("entra a la funcion agregar item")*/
		setItemsList(lista => [
			...lista, 
			{id: Math.random(), value: textValue},
		])
		setTextValue("")
	}

	const renderizarListaItem = ({item, index}) => (
		<TouchableOpacity 
			style={miEstilo.textContainers} 
			onPress={ () => gestionarModal(index)}
			>
			<Text style={miEstilo.texto_items}> {item?.value} </Text>
		</TouchableOpacity>
	)

	const eliminarItem = () => {
		console.debug(itemSelected)
		let listaSinEseItem = itemsList
		listaSinEseItem.splice(itemSelected, 1)
		setItemsList(listaSinEseItem)
		setModalVisible(false)
	}

	const gestionarModal = index => {
		setModalVisible(true)
		setItemSelected(index)
	}

	return (
		<SafeAreaView style={miEstilo.container}>
			<Text 
				style={miEstilo.titulo}>
				Lista de compras
			</Text>
			<View style={miEstilo.view_boton_textinput}>
				<TextInput 
					placeholder = "Ingrese un item"
					style={miEstilo.text_input}
					value = {textValue}
					onChangeText={obtenerLoEscrito}
				/> 
				<Button 
					title="Agregar"
					color = {'#000000'}
					onPress={agregarItem}
				/>
			</View>
			<View style={miEstilo.viewContainerItems}>
				<FlatList 
					data = {itemsList}
					renderItem = {renderizarListaItem}
					keyExtractor = {item => item.id}
				/>
			</View>
			<Modal visible={ModalVisible} animationType="slide" transparent={true}>
				<View miEstilo={miEstilo.modalContainer}>
					<View style={miEstilo.modalContent}>
						<View style={miEstilo.modalTitle}>
							<Text>Eliminar elemento</Text>
						</View>
						<View style={miEstilo.modalMessage}>
							<Text>Estas seguro de eliminar? {itemSelected} </Text>
						</View>
						<View style={miEstilo.modalButton}>
							<Button title="confirmar" onPress={eliminarItem} />
						</View>
					</View>
				</View>
			</Modal>
		</SafeAreaView>
	);
}