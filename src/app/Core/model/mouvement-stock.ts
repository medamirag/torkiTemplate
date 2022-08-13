import { Depot } from "./depot";
import { Mouvement } from "./mouvement";
import { Mp } from "./mp";

export interface MouvementStock {
    mouvement:Mouvement,
    depotOrigine:Depot,
    depotDestination:Depot,
    quantite:Number,
    mp:Mp
}
