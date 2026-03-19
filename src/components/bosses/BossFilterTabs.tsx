import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../theme";
import { BossFiltro } from "../../hooks/useBosses";

interface BossFilterTabsProps {
  filtroAtual: BossFiltro;
  onChange: (filtro: BossFiltro) => void;
}

const OPCOES: { label: string; value: BossFiltro }[] = [
  { label: "Todos", value: "todos" },
  { label: "Derrotados", value: "derrotados" },
  { label: "Pendentes", value: "pendentes" },
];

export function BossFilterTabs({ filtroAtual, onChange }: BossFilterTabsProps) {
  return (
    <View style={styles.filtros}>
      {OPCOES.map((opcao) => {
        const ativo = filtroAtual === opcao.value;

        return (
          <TouchableOpacity
            key={opcao.value}
            style={[styles.filtroButton, ativo && styles.filtroButtonAtivo]}
            onPress={() => onChange(opcao.value)}
            activeOpacity={0.85}
          >
            <Text style={[styles.filtroTexto, ativo && styles.filtroTextoAtivo]}>
              {opcao.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  filtros: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
    marginBottom: 14,
  },
  filtroButton: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },
  filtroButtonAtivo: {
    backgroundColor: colors.gold,
    borderColor: colors.gold,
  },
  filtroTexto: {
    color: colors.text,
    fontWeight: "600",
  },
  filtroTextoAtivo: {
    color: colors.background,
  },
});
