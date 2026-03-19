import { Ionicons } from "@expo/vector-icons";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../../theme";
import { Boss } from "../../data/bosses";

interface BossDetailsModalProps {
  boss: Boss | null;
  onClose: () => void;
  onToggleDerrotado: () => void;
}

export function BossDetailsModal({
  boss,
  onClose,
  onToggleDerrotado,
}: BossDetailsModalProps) {
  return (
    <Modal
      visible={boss !== null}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.modalCard} onPress={() => {}}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={24} color={colors.textLow} />
          </TouchableOpacity>

          <View style={styles.modalAvatar}>
            <Ionicons name="image-outline" size={26} color={colors.gold} />
          </View>

          <Text style={styles.modalNome}>{boss?.nome}</Text>
          <Text style={styles.modalLocal}>{boss?.local}</Text>

          <View style={styles.blocoInfo}>
            <Text style={styles.blocoTitulo}>Fraquezas</Text>
            <View style={styles.tagsContainer}>
              {boss?.fraquezas.map((fraqueza) => (
                <View key={fraqueza} style={styles.tag}>
                  <Text style={styles.tagTexto}>{fraqueza}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.blocoInfo}>
            <Text style={styles.blocoTitulo}>Dicas de Parry</Text>
            <Text style={styles.dicaTexto}>{boss?.dicasParry}</Text>
          </View>

          <TouchableOpacity
            style={styles.marcarButton}
            onPress={onToggleDerrotado}
            activeOpacity={0.85}
          >
            <Ionicons name="checkmark-done" size={18} color={colors.background} />
            <Text style={styles.marcarButtonText}>
              {boss?.derrotado
                ? "Desmarcar como Derrotado"
                : "Marcar como Derrotado"}
            </Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.65)",
    justifyContent: "center",
    paddingHorizontal: 14,
  },
  modalCard: {
    backgroundColor: colors.background,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
  },
  closeButton: {
    alignSelf: "flex-end",
  },
  modalAvatar: {
    alignSelf: "center",
    width: 84,
    height: 84,
    borderRadius: 10,
    backgroundColor: colors.card,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    marginBottom: 10,
  },
  modalNome: {
    textAlign: "center",
    fontSize: 34,
    color: colors.gold,
  },
  modalLocal: {
    textAlign: "center",
    fontSize: 18,
    color: colors.textLow,
    marginTop: 8,
  },
  blocoInfo: {
    marginTop: 14,
    backgroundColor: colors.card,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 12,
  },
  blocoTitulo: {
    color: colors.gold,
    fontSize: 28,
    marginBottom: 8,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    backgroundColor: colors.input,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagTexto: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "600",
  },
  dicaTexto: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 22,
  },
  marcarButton: {
    marginTop: 16,
    backgroundColor: colors.gold,
    borderRadius: 10,
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  marcarButtonText: {
    color: colors.background,
    fontSize: 17,
    fontWeight: "700",
  },
});
