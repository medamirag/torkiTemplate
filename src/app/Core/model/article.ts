import { Besoin } from "./besoin";
import { Couleur } from "./couleur";
import { Gamme } from "./gamme";

export interface Article {
article:string,
gamme:Gamme,
besoin:Besoin[],
dimension:string,
automatique:boolean,
couleur : Couleur,



}
