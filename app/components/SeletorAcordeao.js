import { ScrollView } from "react-native";
import { List } from "react-native-paper";

export const SeletorAcordeao = ({
  titulo,
  valorSelecionado,
  itens,
  aoSelecionar,
  expandido,
  alternarExpandido,
}) => {
  return (
    <List.Section title={titulo}>
      <List.Accordion
        title={
          valorSelecionado == null ? `Selecione o ${titulo}` : valorSelecionado
        }
        expanded={expandido}
        onPress={alternarExpandido}
      >
        <ScrollView style={{ maxHeight: 200 }}>
          {itens.map((item) => (
            <List.Item
              key={item}
              title={item}
              onPress={() => {
                aoSelecionar(item);
              }}
            />
          ))}
        </ScrollView>
      </List.Accordion>
    </List.Section>
  );
};
