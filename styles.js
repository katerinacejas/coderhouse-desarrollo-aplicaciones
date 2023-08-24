import { StyleSheet} from 'react-native';

export const miEstilo = StyleSheet.create({
	container: {
		marginTop: 20,
		justifyContent: 'space-around',
		marginHorizontal: 10,
		padding: 30,
	},
	text_input: {
		borderBottomColor: "black",
		borderBottomWidth: 1,
		width: 200,
		height: 50,
		fontSize: 24,
		paddingLeft: 10,
		color: "#ff0000",
	},
	view_boton_textinput: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 90,
	},
	boton: {
		padding: 150,
	},
	separator: {
		marginVertical: 8,
		borderBottomColor: '#737373',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	texto_items: {
		fontSize: 20,
		backgroundColor: "yellow",
		color: "blue",
		fontWeight: 'bold',
	},
	textContainers: {
		borderColor: "#000000",
		alignItems: "center",
		borderWidth: 2,
		marginVertical: 10,
		width: "90%",
		backgroundColor: "red",
		padding: 10,
	},
	viewContainerItems: {
		justifyContent: "center",
		alignItems: "center",
		borderColor: "red",
		borderWidth: 2,
		marginTop: 40,
	}
});