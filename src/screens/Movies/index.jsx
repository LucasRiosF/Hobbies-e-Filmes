import { View, Text } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function Home() {
  return (
    <View style={styles.container}>
         <Title title="Tela de Filmes" />

         <TouchButton route={"Hobbies"} name={"Ir para a página de Hobbies"} />
         <TouchButton route={"Home"} name={"Ir para a página de Apresentação"} />
    </View>
  );
}