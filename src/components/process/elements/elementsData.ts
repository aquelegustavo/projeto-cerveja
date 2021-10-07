import { elementsBase64 } from "./elementsBase64";

type Element = {
  id: string;
  width: string;
  height: string;
  transform?: string;
  data: string;
};

export const elementsData: Element[] = [
  {
    id: "entrada",
    width: "308",
    height: "318",
    data: elementsBase64.entrada,
  },
  {
    id: "mistura",
    width: "152",
    height: "178",
    transform: "translate(206 80)",
    data: elementsBase64.mistura,
  },
  {
    id: "agua",
    width: "151",
    height: "178",
    transform: "translate(439 80)",
    data: elementsBase64.agua,
  },
  {
    id: "fogo",
    width: "151",
    height: "180",
    transform: "translate(671 79)",
    data: elementsBase64.fogo,
  },
  {
    id: "co2",
    width: "143",
    height: "215",
    transform: "translate(443 369)",
    data: elementsBase64.co2,
  },
  {
    id: "timer",
    width: "142",
    height: "215",
    transform: "translate(212 369)",
    data: elementsBase64.timer,
  },
  {
    id: "temperatura",
    width: "142",
    height: "220",
    transform: "translate(678 364)",
    data: elementsBase64.temperatura,
  },
  {
    id: "saida",
    width: "784",
    height: "624",
    transform: "translate(28 9)",
    data: elementsBase64.saida,
  },
  {
    id: "canoA",
    width: "290",
    height: "302",
    transform: "translate(261 331)",
    data: elementsBase64.cano1,
  },
  {
    id: "canoB",
    width: "290",
    height: "302",
    transform: "translate(495 331)",
    data: elementsBase64.cano1,
  },
  {
    id: "canoC",
    width: "46",
    height: "118",
    transform: "translate(725 254)",
    data: elementsBase64.cano2,
  },
  {
    id: "canoD",
    width: "277",
    height: "305",
    transform: "translate(497 4)",
    data: elementsBase64.cano3,
  },
  {
    id: "canoE",
    width: "277",
    height: "305",
    transform: "translate(264 4)",
    data: elementsBase64.cano3,
  },
];
