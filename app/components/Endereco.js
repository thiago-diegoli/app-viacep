import { View, StyleSheet } from "react-native";
import { TextInput, Text, Divider, Avatar, Button } from "react-native-paper";
import { SeletorAcordeao } from "./SeletorAcordeao";

export const Endereco = ({
  cep,
  definirCep,
  dados,
  definirDados,
  estadoSelecionado,
  expandido,
  alternarExpandido,
  aoSelecionarEstado,
  buscarCep,
  estados,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Avatar.Icon size={40} icon="map-marker" style={styles.headerIcon} />
        <Text variant="titleLarge" style={styles.headerText}>
          Endereço
        </Text>
      </View>
      <Divider style={styles.divider} />

      <View style={styles.cepContainer}>
        <TextInput
          label="CEP"
          placeholder="Digite o CEP"
          mode="outlined"
          value={cep}
          onChangeText={definirCep}
          style={styles.cepInput}
          keyboardType="numeric"
          maxLength={8}
          left={<TextInput.Icon icon="map-marker-radius" />}
        />
        <Button
          mode="contained"
          onPress={() => buscarCep(cep)}
          style={styles.buscarButton}
        >
          Buscar
        </Button>
      </View>

      <TextInput
        label="Rua"
        mode="outlined"
        value={dados.logradouro || ""}
        onChangeText={(valor) => {
          definirDados({ ...dados, logradouro: valor });
        }}
        style={styles.input}
        left={<TextInput.Icon icon="road" />}
      />

      <View style={styles.rowContainer}>
        <TextInput
          label="Número"
          mode="outlined"
          value={dados.numero || ""}
          onChangeText={(valor) => {
            definirDados({ ...dados, numero: valor });
          }}
          style={[styles.input, styles.numeroInput]}
          keyboardType="numeric"
          left={<TextInput.Icon icon="numeric" />}
        />

        <TextInput
          label="Complemento"
          mode="outlined"
          value={dados.complemento || ""}
          onChangeText={(valor) => {
            definirDados({ ...dados, complemento: valor });
          }}
          style={[styles.input, styles.complementoInput]}
          left={<TextInput.Icon icon="information" />}
        />
      </View>

      <TextInput
        label="Bairro"
        mode="outlined"
        value={dados.bairro || ""}
        onChangeText={(valor) => {
          definirDados({ ...dados, bairro: valor });
        }}
        style={styles.input}
        left={<TextInput.Icon icon="home-group" />}
      />

      <View style={styles.rowContainer}>
        <TextInput
          label="Cidade"
          mode="outlined"
          value={dados.localidade || ""}
          onChangeText={(valor) => {
            definirDados({ ...dados, localidade: valor });
          }}
          style={[styles.input, styles.cidadeInput]}
          left={<TextInput.Icon icon="city" />}
        />

        <View style={styles.estadoContainer}>
          <SeletorAcordeao
            titulo="Estado"
            valorSelecionado={estadoSelecionado}
            itens={estados}
            aoSelecionar={aoSelecionarEstado}
            expandido={expandido}
            alternarExpandido={alternarExpandido}
          />
        </View>
      </View>
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
    backgroundColor: "#27ae60",
  },
  headerText: {
    marginLeft: 10,
    fontWeight: "bold",
  },
  divider: {
    marginBottom: 15,
    height: 1.5,
    backgroundColor: "#27ae60",
  },
  cepContainer: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  cepInput: {
    flex: 1,
    marginRight: 10,
  },
  buscarButton: {
    backgroundColor: "#27ae60",
  },
  input: {
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  numeroInput: {
    flex: 1,
    marginRight: 10,
  },
  complementoInput: {
    flex: 2,
  },
  cidadeInput: {
    flex: 2,
    marginRight: 10,
  },
  estadoContainer: {
    flex: 1,
  },
});
