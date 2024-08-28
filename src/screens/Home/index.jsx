import { View, Text } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function Home() {
  return (
    <View style={styles.container}>
         <Title title="Tela de Apresentação" />
         <Text style={styles.texto}>Lucas Rios Ferreira</Text>

         <TouchButton route={"Hobbies"} name={"Ir para a página de Hobbies"} />
         <TouchButton route={"Movies"} name={"Ir para a página de Filmes"} />
    </View>
  );
}