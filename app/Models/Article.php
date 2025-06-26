<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    /** @use HasFactory<\Database\Factories\ArticleFactory> */
    use HasFactory;

    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function categorie() {
        return $this->belongsTo(Categorie::class, 'categorie_id');
    }

    public function tage() {
        return $this->belongsToMany(Tage::class, 'article_tages');
    }

    public function commentaire() {
        return $this->hasMany(Commentaire::class);
    }
}
