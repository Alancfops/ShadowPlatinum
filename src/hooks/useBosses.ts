import { useMemo, useState } from "react";
import { BOSSES_INICIAIS, Boss } from "../data/bosses";

export type BossFiltro = "todos" | "derrotados" | "pendentes";

export function useBosses() {
  const [bosses, setBosses] = useState(BOSSES_INICIAIS);
  const [filtro, setFiltro] = useState<BossFiltro>("todos");
  const [bossSelecionadoId, setBossSelecionadoId] = useState<string | null>(null);

  const chefesDerrotados = useMemo(
    () => bosses.filter((boss) => boss.derrotado).length,
    [bosses]
  );

  const listaFiltrada = useMemo(() => {
    if (filtro === "derrotados") return bosses.filter((boss) => boss.derrotado);
    if (filtro === "pendentes") return bosses.filter((boss) => !boss.derrotado);
    return bosses;
  }, [bosses, filtro]);

  const bossSelecionado = useMemo(
    () => bosses.find((boss) => boss.id === bossSelecionadoId) ?? null,
    [bosses, bossSelecionadoId]
  );

  const alternarDerrotado = (bossId: string) => {
    setBosses((estadoAtual) =>
      estadoAtual.map((boss) =>
        boss.id === bossId ? { ...boss, derrotado: !boss.derrotado } : boss
      )
    );
  };

  const abrirDetalhes = (boss: Boss) => {
    setBossSelecionadoId(boss.id);
  };

  const fecharDetalhes = () => {
    setBossSelecionadoId(null);
  };

  const marcarBossSelecionado = () => {
    if (!bossSelecionado) return;
    alternarDerrotado(bossSelecionado.id);
  };

  return {
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
  };
}
