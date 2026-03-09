import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
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
        <TouchableOpacity
          style={styles.avatarWrapper}
          onPress={handleAlterarFoto}
          activeOpacity={0.8}
        >
          <View style={styles.avatar}>
            <Text style={styles.avatarInicial}>{MOCK_USER.inicial}</Text>
          </View>
          <View style={styles.cameraBadge}>
            <Ionicons name="camera" size={18} color={colors.gold} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.label}>Nome de Usuário</Text>
        <Text style={styles.valor}>{MOCK_USER.nome}</Text>
        <Text style={[styles.label, styles.labelMargin]}>Email</Text>
        <Text style={styles.valor}>{MOCK_USER.email}</Text>
      </View>

      <View style={styles.acoes}>
        <TouchableOpacity
          style={styles.botaoAcao}
          onPress={handleAlterarSenha}
          activeOpacity={0.7}
        >
          <Ionicons name="key-outline" size={22} color={colors.text} />
          <Text style={styles.botaoAcaoTexto}>Alterar Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoAcao}
          onPress={handleDeletarConta}
          activeOpacity={0.7}
        >
          <Ionicons name="trash-outline" size={22} color="#E53935" />
          <Text style={styles.botaoAcaoTextoDanger}>Deletar Conta</Text>
        </TouchableOpacity>
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
  avatarWrapper: {
    position: "relative",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.card,
    borderWidth: 3,
    borderColor: colors.gold,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarInicial: {
    fontSize: 40,
    fontWeight: "700",
    color: colors.gold,
  },
  cameraBadge: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.card,
    borderWidth: 2,
    borderColor: colors.gold,
    justifyContent: "center",
    alignItems: "center",
  },
  cardInfo: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.textLow,
    marginBottom: 4,
  },
  labelMargin: {
    marginTop: 16,
  },
  valor: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text,
  },
  acoes: {
    gap: 12,
  },
  botaoAcao: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 12,
  },
  botaoAcaoTexto: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
  },
  botaoAcaoTextoDanger: {
    fontSize: 16,
    fontWeight: "600",
    color: "#E53935",
  },
});
