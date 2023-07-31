<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => 2,
            'category_id' => mt_rand(1, 4),
            'title' => $this->faker->sentence(),
            'slug' => $this->faker->slug(),
            'excerpt' => implode($this->faker->paragraphs(2)),
            'body' => implode($this->faker->paragraphs(6)),
        ];
    }
}