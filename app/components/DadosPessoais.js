import { TextInput } from "react-native-paper";
import { SeletorAcordeao } from "./SeletorAcordeao";
export const DadosPessoais = ({
  sexoSelecionado,
  expandido,
  alternarExpandido,
  aoSelecionarSexo,
}) => {
  const opcoesSexo = ["Masculino", "Feminino", "Outro"];

  return (
    <>
      <TextInput label="Nome" mode="outlined" />
      <TextInput label="Email" mode="outlined" />
      <SeletorAcordeao
        titulo="Sexo"
        valorSelecionado={sexoSelecionado}
        itens={opcoesSexo}
        aoSelecionar={aoSelecionarSexo}
        expandido={expandido}
        alternarExpandido={alternarExpandido}
      />
    </>
  );
};
