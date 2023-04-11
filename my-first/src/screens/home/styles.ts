import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  
  eventName: {
    color: "#FDFCFE",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 48,
  },

  eventDate: {
    color: "#6B6B6B",
  },

  input: {
    flex: 1,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FFFF",
    padding: 16,
    fontSize: 16,
    marginRight: 12
  },

  buttonText:{
    color: "#FFFF",
    fontSize: 24,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    justifyContent: "center",
    alignItems: "center",
  },

  form: {
    width: '100%',
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42
  },

  studentTable:{
    gap: 8
  },
  
  listEmpty: {
    color: "#FFFF",
  },
});
