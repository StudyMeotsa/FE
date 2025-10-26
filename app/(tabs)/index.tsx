import CustomButton from "@/components/CustomButton";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
        <Text>초기 세팅</Text>
        <CustomButton label="멈춤"/>
        <CustomButton label="멈춤" color="brown"/>
        <CustomButton label="이어하기" size = "medium"/>
    </View>
  );
}
