<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commentaire extends Model
{
    /** @use HasFactory<\Database\Factories\CommentaireFactory> */
    use HasFactory;

    public function article() {
        return $this->belongsTo(Article::class, 'article_id');
    }

    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }
}
