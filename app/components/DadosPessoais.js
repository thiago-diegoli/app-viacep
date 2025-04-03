import { View, StyleSheet } from "react-native";
import { TextInput, Text, Divider, Avatar } from "react-native-paper";
import { SeletorAcordeao } from "./SeletorAcordeao";

export const DadosPessoais = ({
  sexoSelecionado,
  expandido,
  alternarExpandido,
  aoSelecionarSexo,
}) => {
  const opcoesSexo = ["Masculino", "Feminino", "Outro"];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Avatar.Icon size={40} icon="account" style={styles.headerIcon} />
        <Text variant="titleLarge" style={styles.headerText}>
          Dados Pessoais
        </Text>
      </View>
      <Divider style={styles.divider} />

      <TextInput
        label="Nome"
        mode="outlined"
        left={<TextInput.Icon icon="account" />}
        style={styles.input}
      />

      <TextInput
        label="Email"
        mode="outlined"
        left={<TextInput.Icon icon="email" />}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <SeletorAcordeao
        titulo="Sexo"
        valorSelecionado={sexoSelecionado}
        itens={opcoesSexo}
        aoSelecionar={aoSelecionarSexo}
        expandido={expandido}
        alternarExpandido={alternarExpandido}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    elevation: 2,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  headerIcon: {
    backgroundColor: "#3498db",
  },
  headerText: {
    marginLeft: 10,
    fontWeight: "bold",
  },
  divider: {
    marginBottom: 15,
    height: 1.5,
    backgroundColor: "#3498db",
  },
  input: {
    marginBottom: 10,
  },
});
