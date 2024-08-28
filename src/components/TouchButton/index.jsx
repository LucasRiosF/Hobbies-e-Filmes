import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Title from "../Title";

const TouchButton = ({ route, name }) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(route)}
      >
        <Title title={name} />
      </TouchableOpacity>
    </View>
  );
};

export default TouchButton;