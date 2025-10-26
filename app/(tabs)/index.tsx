import CustomButton from "@/components/CustomButton";
import SubmitButton from "@/components/SubmitButton";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
        <Text>초기 세팅</Text>
        <CustomButton label="멈춤"/>
        <CustomButton label="멈춤" color="brown"/>
        <CustomButton label="이어하기" size = "medium"/>
        <CustomButton label="스터디룸 만들기" size = "large" color="brown"/>
        <SubmitButton label="과제 1 내기"/>
    </View>
  );
}
