<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tages')->insert([
            [
                'nom' => 'LDC'
            ],
            [
                'nom' => 'CAN'
            ],
            [
                'nom' => "Ballon d'or"
            ],
            [
                'nom' => "Mercato"
            ]
        ]);

        DB::table('article_tages')->insert([
            [
                'article_id' => 1,
                'tage_id' => 3
            ],
            [
                'article_id' => 2,
                'tage_id' => 4
            ],
            [
                'article_id' => 3,
                'tage_id' => 1
            ],
            [
                'article_id' => 4,
                'tage_id' => 4
            ],
            [
                'article_id' => 5,
                'tage_id' => 2
            ]
        ]);
    }
}
