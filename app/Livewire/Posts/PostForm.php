<?php

declare(strict_types=1);

namespace App\Livewire\Posts;

use App\Models\Post;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Livewire\Component;

class PostForm extends Component
{
    use AuthorizesRequests;

    public ?Post $post = null;
    public string $topic = '';
    public string $content = '';

    /**
     * Mount the component.
     */
    public function mount(?Post $post = null): void
    {
        $this->post = $post;

        if ($post) {
            $this->authorize('update', $post);
            $this->topic = $post->topic;
            $this->content = $post->content;
        }
    }

    /**
     * Validation rules.
     *
     * @return array<string, mixed>
     */
    protected function rules(): array
    {
        return [
            'topic' => 'required|string|max:255',
            'content' => 'required|string',
        ];
    }

    /**
     * Save the post.
     */
    public function save(): void
    {
        $validated = $this->validate();

        if ($this->post) {
            $this->post->update($validated);
            $this->dispatch('post-saved', postId: $this->post->id);
            session()->flash('success', 'Post updated successfully.');
        } else {
            $post = auth()->user()->posts()->create($validated);
            $this->dispatch('post-saved', postId: $post->id);
            session()->flash('success', 'Post created successfully.');
            $this->reset(['topic', 'content']);
        }
    }

    /**
     * Render the component.
     */
    public function render()
    {
        return view('livewire.posts.post-form');
    }
} 