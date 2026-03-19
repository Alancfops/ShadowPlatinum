export interface Boss {
  id: string;
  nome: string;
  local: string;
  fraquezas: string[];
  dicasParry: string;
  derrotado: boolean;
  imagem?: string;
}

export const BOSSES_INICIAIS: Boss[] = [
  {
    id: "genichiro-ashina",
    nome: "Genichiro Ashina",
    local: "Ashina Castle",
    fraquezas: ["Relampago"],
    dicasParry: "Placeholder: atualize com a estrategia ideal.",
    derrotado: false,
  },
  {
    id: "gyoubu-oniwa",
    nome: "Gyoubu Masataka Oniwa",
    local: "Ashina Outskirts",
    fraquezas: ["Firecrackers"],
    dicasParry: "Placeholder: atualize com a estrategia ideal.",
    derrotado: false,
  },
  {
    id: "lady-butterfly",
    nome: "Lady Butterfly",
    local: "Hirata Estate",
    fraquezas: ["Shuriken"],
    dicasParry: "Placeholder: atualize com a estrategia ideal.",
    derrotado: false,
  },
  {
    id: "guardian-ape",
    nome: "Guardian Ape",
    local: "Sunken Valley",
    fraquezas: ["Flame Vent"],
    dicasParry: "Placeholder: atualize com a estrategia ideal.",
    derrotado: false,
  },
  {
    id: "corrupted-monk",
    nome: "Corrupted Monk",
    local: "Mibu Village",
    fraquezas: ["Snap Seed"],
    dicasParry: "Placeholder: atualize com a estrategia ideal.",
    derrotado: false,
  },
  {
    id: "great-shinobi-owl",
    nome: "Great Shinobi Owl",
    local: "Ashina Castle",
    fraquezas: ["Mikiri Counter"],
    dicasParry: "Placeholder: atualize com a estrategia ideal.",
    derrotado: false,
  },
  {
    id: "divine-dragon",
    nome: "Divine Dragon",
    local: "Fountainhead Palace",
    fraquezas: ["Relampago"],
    dicasParry: "Placeholder: atualize com a estrategia ideal.",
    derrotado: false,
  },
  {
    id: "demon-of-hatred",
    nome: "Demon of Hatred",
    local: "Ashina Outskirts",
    fraquezas: ["Suzaku Umbrella"],
    dicasParry: "Placeholder: atualize com a estrategia ideal.",
    derrotado: false,
  },
  {
    id: "isshin-sword-saint",
    nome: "Isshin, the Sword Saint",
    local: "Ashina Reservoir",
    fraquezas: ["Mikiri Counter"],
    dicasParry: "Placeholder: atualize com a estrategia ideal.",
    derrotado: false,
  },
  {
    id: "emma-the-gentle-blade",
    nome: "Emma, the Gentle Blade",
    local: "Ashina Castle",
    fraquezas: ["Parry"],
    dicasParry: "Placeholder: atualize com a estrategia ideal.",
    derrotado: false,
  },
  {
    id: "isshin-ashina",
    nome: "Isshin Ashina",
    local: "Ashina Castle",
    fraquezas: ["Fire Resistance"],
    dicasParry: "Placeholder: atualize com a estrategia ideal.",
    derrotado: false,
  },
  {
    id: "owl-father",
    nome: "Owl (Father)",
    local: "Hirata Estate",
    fraquezas: ["Parry"],
    dicasParry: "Placeholder: atualize com a estrategia ideal.",
    derrotado: false,
  },
  {
    id: "true-monk",
    nome: "True Monk",
    local: "Fountainhead Bridge",
    fraquezas: ["Firecrackers"],
    dicasParry: "Placeholder: atualize com a estrategia ideal.",
    derrotado: false,
  },
  {
    id: "headless-ape",
    nome: "Headless Ape",
    local: "Sunken Valley",
    fraquezas: ["Loaded Spear"],
    dicasParry: "Placeholder: atualize com a estrategia ideal.",
    derrotado: false,
  },
  {
    id: "enma",
    nome: "Enma",
    local: "A definir",
    fraquezas: ["A definir"],
    dicasParry: "Placeholder: atualize com a estrategia ideal.",
    derrotado: false,
  },
];

export function getBossesProgress(bosses: Boss[]) {
  const total = bosses.length;
  const derrotados = bosses.filter((boss) => boss.derrotado).length;
  return { derrotados, total };
}
