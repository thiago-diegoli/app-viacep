import { Text } from "react-native";
import { Button, Modal, Portal } from "react-native-paper";

export const ModalErro = ({ visivel, esconderModal, mensagem }) => {
  const estiloContainer = { backgroundColor: "white", padding: 50 };

  return (
    <Portal>
      <Modal
        visible={visivel}
        onDismiss={esconderModal}
        contentContainerStyle={estiloContainer}
      >
        <Text>{mensagem}</Text>
        <Button onPress={esconderModal}>Fechar</Button>
      </Modal>
    </Portal>
  );
};
