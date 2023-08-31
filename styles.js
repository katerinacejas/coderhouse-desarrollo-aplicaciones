import { StyleSheet} from 'react-native';

export const miEstilo = StyleSheet.create({
	container: {
		marginTop: 20,
		justifyContent: 'space-around',
		marginHorizontal: 10,
		padding: 30,
	},
	text_input: {
		borderBottomColor: "white",
		borderBottomWidth: 1,
		width: 200,
		height: 50,
		fontSize: 24,
		paddingLeft: 10,
		color: "#000000",
		fontWeight: 'bold',
	},
	view_boton_textinput: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 90,
		borderRadius: 10,
		backgroundColor: "#D4E8E3",
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
		width: "100%",
		backgroundColor: "red",
		padding: 10,
	},
	viewContainerItems: {
		justifyContent: "center",
		alignItems: "center",
		borderColor: "red",
		borderWidth: 2,
		marginTop: 40,
	},
	titulo: {
		marginTop: 90,
		fontSize: 35,
		fontWeight: '500',
		marginBottom: 25,
	},
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalContent: {
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		elevation: 5,
	},
	modalTitle: {
		backgroundColor: '#ccc',
		color: '#fff',
		fontSize: 18,
	},
	modalMessage: {
		marginBottom: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalButton: {
		marginTop: 15,
	}
});