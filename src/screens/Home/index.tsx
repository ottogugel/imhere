import {
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export function Home() {

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigate("new")}>
          <Text style={styles.text}>New Event</Text>
        </TouchableOpacity>
    </View>
  );
}
