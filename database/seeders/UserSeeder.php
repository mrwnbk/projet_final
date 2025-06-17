<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'name' => 'Marwane',
                'email' => 'marwane.projetfinal@gmail.com',
                'password' => Hash::make('molengeek'),
                'role_id' => 1
            ],
            [
                'name' => 'Sufyan',
                'email' => 'sufyan.projetfinal@gmail.com',
                'password' => Hash::make('molengeek'),
                'role_id' => 2
            ],
            [
                'name' => 'Bilal',
                'email' => 'bilal.projetfinal@gmail.com',
                'password' => Hash::make('molengeek'),
                'role_id' => 3
            ],
            [
                'name' => 'Ali',
                'email' => 'ali.projetfinal@gmail.com',
                'password' => Hash::make('molengeek'),
                'role_id' => 4
            ]
        ]);
    }
}
