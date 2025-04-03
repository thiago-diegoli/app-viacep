import { TextInput } from "react-native-paper";
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
    <>
      <TextInput
        placeholder="Digite o CEP"
        onChangeText={(x) => {
          definirCep(x);
        }}
        onBlur={() => {
          buscarCep(cep);
        }}
        style={{
          borderColor: "black",
          borderWidth: 1,
          borderStyle: "Solid",
          borderRadius: 4,
          margin: 5,
        }}
      />
      <TextInput
        label="Rua"
        mode="outlined"
        value={dados.logradouro}
        onChangeText={(valor) => {
          definirDados({ ...dados, logradouro: valor });
        }}
      />
      <TextInput
        label="Complemento"
        mode="outlined"
        value={dados.complemento}
        onChangeText={(valor) => {
          definirDados({ ...dados, complemento: valor });
        }}
      />
      <TextInput
        label="Bairro"
        mode="outlined"
        value={dados.bairro}
        onChangeText={(valor) => {
          definirDados({ ...dados, bairro: valor });
        }}
      />
      <TextInput
        label="Cidade"
        mode="outlined"
        value={dados.localidade}
        onChangeText={(valor) => {
          definirDados({ ...dados, localidade: valor });
        }}
      />
      <SeletorAcordeao
        titulo="Estado"
        valorSelecionado={estadoSelecionado}
        itens={estados}
        aoSelecionar={aoSelecionarEstado}
        expandido={expandido}
        alternarExpandido={alternarExpandido}
      />
    </>
  );
};
