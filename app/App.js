import { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Button, PaperProvider } from "react-native-paper";
import { DadosPessoais } from "./components/DadosPessoais";
import { Endereco } from "./components/Endereco";
import { ModalErro } from "./components/ModalErro";

export default function App() {
  const [visivel, setVisivel] = useState(false);
  const [cep, setCep] = useState("");
  const [dados, setDados] = useState({});
  const [sexoExpandido, setSexoExpandido] = useState(false);
  const [estadoExpandido, setEstadoExpandido] = useState(false);
  const [estadoSelecionado, setEstadoSelecionado] = useState(null);
  const [sexoSelecionado, setSexoSelecionado] = useState(null);

  const mostrarModal = () => setVisivel(true);
  const esconderModal = () => setVisivel(false);

  const alternarSexoExpandido = () => setSexoExpandido(!sexoExpandido);
  const alternarEstadoExpandido = () => setEstadoExpandido(!estadoExpandido);

  const aoSelecionarItem = (item) => {
    setEstadoSelecionado(item);
    setEstadoExpandido(false);
  };

  const aoSelecionarSexo = (sexo) => {
    setSexoSelecionado(sexo);
    setSexoExpandido(false);
  };

  const buscarCep = (valorCep) => {
    let url = `https://viacep.com.br/ws/${valorCep}/json/`;

    fetch(url)
      .then((resposta) => {
        return resposta.json();
      })
      .then((dadosEndereco) => {
        console.log(dadosEndereco);
        setDados(dadosEndereco);
        setEstadoSelecionado(dadosEndereco.uf);
      })
      .catch(() => {
        mostrarModal();
      });
  };

  const estados = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];

  return (
    <PaperProvider>
      <ScrollView>
        <View style={styles.container}>
          <DadosPessoais
            sexoSelecionado={sexoSelecionado}
            expandido={sexoExpandido}
            alternarExpandido={alternarSexoExpandido}
            aoSelecionarSexo={aoSelecionarSexo}
          />

          <Endereco
            cep={cep}
            definirCep={setCep}
            dados={dados}
            definirDados={setDados}
            estadoSelecionado={estadoSelecionado}
            expandido={estadoExpandido}
            alternarExpandido={alternarEstadoExpandido}
            aoSelecionarEstado={aoSelecionarItem}
            buscarCep={buscarCep}
            estados={estados}
          />

          <Button mode="outlined">Cadastrar</Button>

          <ModalErro
            visivel={visivel}
            esconderModal={esconderModal}
            mensagem="Este CEP não existe"
          />
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    padding: 8,
    justifyContent: "center",
  },
});
