import { useMemo, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { CategoryCard, PageHeader, ProgressBar } from "../../components";
import type { CategoryIcon } from "../../components";
import { colors } from "../../../theme";
import { BOSSES_INICIAIS, getBossesProgress } from "../../data/bosses";

type CategoriaKey = "proteses" | "chefes" | "itens" | "trofeus";

interface CategoriaMock {
  key: CategoriaKey;
  titulo: string;
  atual: number;
  total: number;
  icon: CategoryIcon;
}

const MOCK_CATEGORIAS: CategoriaMock[] = [
  {
    key: "proteses",
    titulo: "PRÓTESES",
    atual: 5,
    total: 10,
    icon: "construct-outline",
  },
  {
    key: "chefes",
    titulo: "CHEFES",
    atual: 2,
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
  const router = useRouter();
  const [dados] = useState(MOCK_CATEGORIAS);

  const { categoriasComPercentual, percentualPlatina } = useMemo(() => {
    const progressoChefes = getBossesProgress(BOSSES_INICIAIS);

    const categoriasComPercentual = dados.map((cat) => ({
      ...cat,
      atual: cat.key === "chefes" ? progressoChefes.derrotados : cat.atual,
      total: cat.key === "chefes" ? progressoChefes.total : cat.total,
    })).map((cat) => ({
      ...cat,
      percentual: calcularPercentual(cat.atual, cat.total),
      progresso: `${cat.atual}/${cat.total}`,
    }));
    const somaPercentuais = categoriasComPercentual.reduce(
      (acc, item) => acc + item.percentual,
      0
    );
    const percentualPlatina = Math.round(
      somaPercentuais / categoriasComPercentual.length
    );
    return { categoriasComPercentual, percentualPlatina };
  }, [dados]);

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <PageHeader title="SHADOW PLATINUM" subtitle="Companheiro Shinobi" />

      <View style={styles.cardPlatina}>
        <ProgressBar
          label="PROGRESSO DA PLATINA"
          value={`${percentualPlatina}%`}
          percent={percentualPlatina}
        />
      </View>

      <View style={styles.grid}>
        {categoriasComPercentual.map((cat) => (
          <CategoryCard
            key={cat.key}
            title={cat.titulo}
            progress={cat.progresso}
            percent={cat.percentual}
            icon={cat.icon}
            onPress={
              cat.key === "chefes"
                ? () => router.push("/(tabs)/chefes")
                : undefined
            }
          />
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
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
