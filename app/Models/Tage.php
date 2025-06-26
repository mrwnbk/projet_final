<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tage extends Model
{
    /** @use HasFactory<\Database\Factories\TageFactory> */
    use HasFactory;

    public function article() {
        return $this->belongsToMany(Article::class, 'article_tages');
    }
}
