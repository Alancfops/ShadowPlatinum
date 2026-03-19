import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../theme";
import { Boss } from "../../data/bosses";

interface BossListItemProps {
  boss: Boss;
  onToggleDerrotado: (bossId: string) => void;
  onOpenDetalhes: (boss: Boss) => void;
}

export function BossListItem({
  boss,
  onToggleDerrotado,
  onOpenDetalhes,
}: BossListItemProps) {
  return (
    <View style={styles.cardBoss}>
      <View style={styles.avatarPlaceholder}>
        <Ionicons name="image-outline" size={18} color={colors.gold} />
      </View>

      <View style={styles.infoBoss}>
        <Text numberOfLines={1} style={styles.nomeBoss}>
          {boss.nome}
        </Text>
        <Text style={styles.localBoss}>{boss.local}</Text>
      </View>

      <TouchableOpacity
        style={styles.checkButton}
        onPress={() => onToggleDerrotado(boss.id)}
        activeOpacity={0.8}
      >
        <Ionicons
          name={boss.derrotado ? "checkmark-circle" : "ellipse-outline"}
          size={24}
          color={boss.derrotado ? colors.gold : colors.textLow}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.arrowButton}
        onPress={() => onOpenDetalhes(boss)}
        activeOpacity={0.8}
      >
        <Ionicons name="chevron-forward" size={22} color={colors.textLow} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardBoss: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 12,
  },
  avatarPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: colors.input,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  infoBoss: {
    flex: 1,
  },
  nomeBoss: {
    fontSize: 20,
    color: colors.text,
  },
  localBoss: {
    fontSize: 16,
    color: colors.textLow,
    marginTop: 2,
  },
  checkButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  arrowButton: {
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
});
