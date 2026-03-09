import { View, StyleSheet, ScrollView } from "react-native";
import { ActionButton, Avatar, InfoCard } from "../../components";
import { colors } from "../../../theme";

const MOCK_USER = {
  nome: "Shinobi",
  email: "shinobi@ashina.jp",
  inicial: "S",
};

export default function PerfilScreen() {
  const handleAlterarFoto = () => {
    // TODO: abrir seletor de imagem
  };

  const handleAlterarSenha = () => {
    // TODO: navegar para alterar senha
  };

  const handleDeletarConta = () => {
    // TODO: confirmar e deletar conta
  };

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Avatar
          initial={MOCK_USER.inicial}
          onPress={handleAlterarFoto}
          showCameraBadge
        />
      </View>

      <InfoCard
        rows={[
          { label: "Nome de Usuário", value: MOCK_USER.nome },
          { label: "Email", value: MOCK_USER.email },
        ]}
      />

      <View style={styles.acoes}>
        <ActionButton
          icon="key-outline"
          label="Alterar Senha"
          onPress={handleAlterarSenha}
        />
        <ActionButton
          icon="trash-outline"
          label="Deletar Conta"
          onPress={handleDeletarConta}
          danger
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 48,
    paddingBottom: 24,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  acoes: {
    gap: 12,
  },
});
