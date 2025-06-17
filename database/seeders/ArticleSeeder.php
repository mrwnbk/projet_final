<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('articles')->insert([
            [
                'titre' => "Ousmane Dembele ou Lamine Yamal ballon d'or?",
                'description' => "La course au Ballon d'Or s'annonce palpitante cette année, et deux noms agitent déjà les débats : Ousmane Dembélé, l’ailier explosif du Paris Saint-Germain, et Lamine Yamal, la pépite du FC Barcelone à peine âgée de 17 ans. Entre l’expérience et la régularité du premier, et le génie précoce du second, les observateurs se divisent. Cet article analyse leurs performances respectives, leurs statistiques, et leur influence sur leurs équipes pour tenter de répondre à cette question brûlante : qui mérite le plus le prestigieux trophée individuel cette saison ?",
                'image' => "/images/dembeleballondor.jpg",
                'user_id' => 1
            ],
            [
                'titre' => "Officiel : Rayan Cherki rejoint Manchester City !",
                'description' => "Le jeune prodige de l’Olympique Lyonnais, Rayan Cherki, s’est engagé officiellement avec Manchester City pour les cinq prochaines saisons. Le transfert, estimé à 37 millions d’euros (+ bonus), marque un tournant dans la carrière du meneur de jeu français de 21 ans. Convoité pour sa créativité et sa vision du jeu, Cherki arrive pour renforcer l’entrejeu mancunien, où il pourrait progressivement succéder à Kevin De Bruyne. L’international espoirs tricolore a brillé cette saison avec 12 buts et 20 passes décisives, notamment en Ligue Europa où il s’est imposé comme le meilleur créateur de la compétition. Animé par un fort esprit de revanche après la défaite face à Manchester United, Cherki a déclaré vouloir “marquer les esprits” dès son arrivée en Premier League. Une chose est sûre : Pep Guardiola voit en lui un élément clé du futur de City.",
                'image' => "/images/cherkiCity.jpg",
                'user_id' => 1
            ],
            [
                'titre' => "Historique : le PSG remporte enfin la Ligue des Champions !",
                'description' => "C’est fait ! Le Paris Saint-Germain a remporté sa première Ligue des Champions ce samedi 31 mai 2025 à l’Allianz Arena de Munich, en écrasant l’Inter Milan sur un score sans appel de 5-0. Un exploit monumental qui marque un tournant dans l’histoire du club. Sous la direction de Luis Enrique, les Parisiens ont livré une prestation XXL, portée par un collectif soudé et une génération montante de talents. Désiré Doué, auteur d’un doublé, a illuminé la rencontre, aux côtés d’un Hakimi décisif, d’un Kvaratskhelia percutant et du jeune Mayulu en feu. Ce triomphe historique permet au PSG de : Remporter sa 1ʳᵉ C1, devenant le 2ᵉ club français sacré après l’OM en 1993. Une nuit magique pour Paris !",
                'image' => "/images/psgldc.avif",
                'user_id' => 1
            ],
        ]);
    }
}
