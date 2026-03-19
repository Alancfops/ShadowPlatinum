import { ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../theme";
import { BossDetailsModal, BossFilterTabs, BossListItem } from "../../components/bosses";
import { useBosses } from "../../hooks/useBosses";

export default function ChefesScreen() {
  const {
    bosses,
    filtro,
    setFiltro,
    listaFiltrada,
    bossSelecionado,
    chefesDerrotados,
    alternarDerrotado,
    abrirDetalhes,
    fecharDetalhes,
    marcarBossSelecionado,
  } = useBosses();

  return (
    <>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.titulo}>Enciclopedia de Chefes</Text>
        <Text style={styles.contador}>
          {chefesDerrotados}/{bosses.length} derrotados
        </Text>

        <BossFilterTabs filtroAtual={filtro} onChange={setFiltro} />

        <View style={styles.lista}>
          {listaFiltrada.map((boss) => (
            <BossListItem
              key={boss.id}
              boss={boss}
              onToggleDerrotado={alternarDerrotado}
              onOpenDetalhes={abrirDetalhes}
            />
          ))}
        </View>
      </ScrollView>

      <BossDetailsModal
        boss={bossSelecionado}
        onClose={fecharDetalhes}
        onToggleDerrotado={marcarBossSelecionado}
      />
    </>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 28,
    paddingBottom: 24,
  },
  titulo: {
    fontSize: 36,
    color: colors.gold,
    textAlign: "center",
    marginTop: 6,
  },
  contador: {
    fontSize: 28,
    color: colors.textLow,
    textAlign: "center",
    marginTop: 8,
  },
  lista: {
    gap: 10,
  },
});
