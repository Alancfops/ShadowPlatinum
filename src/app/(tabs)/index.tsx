import { useMemo, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../theme";

type CategoriaKey = "proteses" | "chefes" | "itens" | "trofeus";

interface CategoriaMock {
  key: CategoriaKey;
  titulo: string;
  atual: number;
  total: number;
  icon:
    | "construct-outline"
    | "skull-outline"
    | "flower-outline"
    | "trophy-outline";
}

const MOCK_CATEGORIAS: CategoriaMock[] = [
  {
    key: "proteses",
    titulo: "PRÓTESES",
    atual: 0,
    total: 10,
    icon: "construct-outline",
  },
  {
    key: "chefes",
    titulo: "CHEFES",
    atual: 0,
    total: 14,
    icon: "skull-outline",
  },
  {
    key: "itens",
    titulo: "ITENS",
    atual: 0,
    total: 25,
    icon: "flower-outline",
  },
  {
    key: "trofeus",
    titulo: "TROFÉUS",
    atual: 0,
    total: 16,
    icon: "trophy-outline",
  },
];

function calcularPercentual(atual: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((atual / total) * 100);
}

export default function HomeScreen() {
  const [dados] = useState(MOCK_CATEGORIAS);

  const { categoriasComPercentual, percentualPlatina } = useMemo(() => {
    const categoriasComPercentual = dados.map((cat) => ({
      ...cat,
      percentual: calcularPercentual(cat.atual, cat.total),
      progresso: `${cat.atual}/${cat.total}`,
    }));
    const somaPercentuais = categoriasComPercentual.reduce(
      (acc, c) => acc + c.percentual,
      0,
    );
    const percentualPlatina = Math.round(
      somaPercentuais / categoriasComPercentual.length,
    );
    return { categoriasComPercentual, percentualPlatina };
  }, [dados]);

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>SHADOW PLATINUM</Text>
        <Text style={styles.subtitle}>Companheiro Shinobi</Text>
      </View>

      <View style={styles.cardPlatina}>
        <Text style={styles.cardPlatinaLabel}>PROGRESSO DA PLATINA</Text>
        <Text style={styles.cardPlatinaValor}>{percentualPlatina}%</Text>
        <View style={styles.barTrack}>
          <View style={[styles.barFill, { width: `${percentualPlatina}%` }]} />
        </View>
      </View>

      <View style={styles.grid}>
        {categoriasComPercentual.map((cat) => (
          <View key={cat.key} style={styles.cardCategoria}>
            <Ionicons
              name={cat.icon}
              size={28}
              color={colors.gold}
              style={styles.cardIcon}
            />
            <Text style={styles.cardTitulo}>{cat.titulo}</Text>
            <View style={styles.cardConteudo}>
              <Text style={styles.cardProgresso}>{cat.progresso}</Text>
              <Text style={styles.cardPercentual}>{cat.percentual}%</Text>
              <View style={styles.barTrackSmall}>
                <View
                  style={[styles.barFill, { width: `${cat.percentual}%` }]}
                />
              </View>
            </View>
          </View>
        ))}
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
    marginBottom: 28,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: colors.gold,
    letterSpacing: 2,
    marginTop: 36,
  },
  subtitle: {
    fontSize: 14,
    color: colors.gold,
    marginTop: 6,
    opacity: 0.9,
  },
  cardPlatina: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 18,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  cardPlatinaLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.gold,
    letterSpacing: 1,
    marginBottom: 6,
  },
  cardPlatinaValor: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 10,
  },
  barTrack: {
    height: 8,
    backgroundColor: colors.input,
    borderRadius: 4,
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    backgroundColor: colors.gold,
    borderRadius: 4,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardCategoria: {
    width: "48%",
    padding: 12,
    marginBottom: 16,
    backgroundColor: colors.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    minHeight: 150,
  },
  cardIcon: {
    marginBottom: 6,
  },
  cardTitulo: {
    fontSize: 11,
    fontWeight: "600",
    color: colors.textLow,
    letterSpacing: 1,
    marginBottom: 4,
  },
  cardConteudo: {
    marginTop: 12,
  },
  cardProgresso: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.text,
  },
  cardPercentual: {
    fontSize: 12,
    color: colors.textLow,
    marginTop: 2,
    marginBottom: 8,
  },
  barTrackSmall: {
    height: 6,
    backgroundColor: colors.input,
    borderRadius: 3,
    overflow: "hidden",
  },
});
