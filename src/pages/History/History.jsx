import React from "react";
import "./History.css"
import Header from "../../components/Header/Header";

import background7 from "/background7.png"

export default function History() {
    return (
        <>  
            <img src = {background7} className="history-background" />
            <Header />
            <div className="History">
                <section class="history-entry">
                    <h2>1917 : Fondation et premières années</h2>
                    <p>Ce fut pendant la première guerre mondiale, en 1917, que le football vit le jour dans la cité avec « l’Etoile Sportive suryquoise » fondée par M. Abeille. Pour ces premiers pas, les Benoît Vial, Grandgonnet frères, Passelèque, J. Duport, Michel Barjon, Christophe Clavier, Jean Décousu, Lepart, Constant Simon, etc… étaient là, et l’on jouait au Petit Mont, sur les communaux. En 1920, M. Constant Simon présidait le club.</p>
                </section> 
                <section class="history-entry">
                    <h2>1924 : Division et Réforme</h2>
                    <p>Quatre ans plus tard, une scission se créa au sein de la société qui se divisa en trois groupes : le « Sury Sportif » dirigé par MM. Simon et Mas (couleur sang et or à damiers), « l’Etoile Sportive » avec M. Passelègue et l’Amicale laïque qui créa une section football. Trois clubs c’était trop dans une cité de 3000 habitants, et un an plus tard, les responsables se retrouvèrent autour d’une table, pour en discuter. La saison 1925 vit une fusion sous le nom du « Sury-Sporting-Club » (l’actuel club de football), qui garda les couleurs du « Sury Sportif », maillot sang et or à damiers avec un terrain, chemin du château d’eau, vers les cités Lyotard.</p>
                </section>
                <section class="history-entry">
                    <h2>1926-1929 : Ère d'or</h2>
                    <p>MM Ploivy et Lefranc en assurèrent la présidence et le club traversa une époque faste avec deux saisons sans défaite et trois titres de champion de la Loire entre 1926 et 1929. Le Sury S.C. était alors au plus haut niveau régional fournissant six joueurs à la sélection de la Loire.</p>
                </section>
                <section class="history-entry">
                    <h2>1931 : Contestations et Confiscation</h2>
                    <p>MM Ploivy et Lefranc en assurèrent la présidence et le club traversa une époque faste avec deux saisons sans défaite et trois titres de champion de la Loire entre 1926 et 1929. Le Sury S.C. était alors au plus haut niveau régional fournissant six joueurs à la sélection de la Loire.</p>
                </section>
                <section class="history-entry">
                    <h2>1941-1949 : Reconstruction et résilience</h2>
                    <p>En 1941, une bande de copains relancèrent les anciens dirigeants. Le club repartira en 4ème division, avec M. Lefranc à la présidence. La première « cabane » qui servira de vestiaires sera construite en 1949 par les joueurs et les dirigeants.</p>
                </section>
                <section class="history-entry">
                    <h2>1951-1972 : Développement d’après-guerre et esprit communautaire</h2>
                    <p>On se change, soit dans un coin du terrain, soit dans le vestibule d’une maison voisine, et l’on va se « laver » dans l’Ozon qui coule tout près du terrain. Dans l’équipe, dès 1948, arrivèrent les Roller, Clave, Perret, Fournier, Fridière, Wlodarcyck, Vassel, Faure, qui se joignirent à ceux de 1945. Ils feront monter le club en 1951-52 en Promotion Loire. En 1972, un ancien joueur, A. Norhadian, prendra la présidence.</p>
                </section>
                <section class="history-entry">
                    <h2>1989-1990 : une saison marquante</h2>
                    <p>La saison 1989-90 marquera dans les annales du club, car l’équipe fanion accède à la Ligue et la 2ème (coach Manu Fernandes) à la 1ère division. Le 2 septembre 1990 le club fêta son 65ème anniversaire – une jolie fête.</p>
                </section>
                <section class="history-entry">
                    <h2>1992 à aujourd'hui : ère moderne et héritage</h2>
                    <p>En 1992, J.C. Vial quitta le Sury S.C. et en 1993-94 le club fera ses adieux à la ligue pour retrouver le championnat de la Loire « excellence ». En 2002, Bernard Pellaud confirma son désir de quitter la présidence du club dans lequel il était présent depuis… 40 ans. Un nouveau président fut désigné, Daniel Bodelot, Gaby Pellaud restant vice président ; Philippe Brossier, secrétaire ; Claude Mathaud, trésorier.</p>
                </section>
            </div>
        </>
    )
}