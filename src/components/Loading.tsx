import { ActivityIndicator, View } from "react-native";

export function Loading() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#131016",
      }}
    >
      <ActivityIndicator color="#0143A7" />
    </View>
  );
}
