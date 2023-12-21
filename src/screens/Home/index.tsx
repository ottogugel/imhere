import {
  View,
  Text,
  TouchableOpacity,
  Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export function Home() {

  const { navigate } = useNavigation();

  function handleWarn() {
    return Alert.alert("Coming soon...", "Application under development!");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigate("new")}>
        <Text style={styles.text}>New Event</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonC} onPress={handleWarn}>
        <Text style={styles.textC}>Event location</Text>
      </TouchableOpacity>
    </View>
  );
}
