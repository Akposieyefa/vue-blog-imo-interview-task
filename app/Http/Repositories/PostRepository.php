<?php 

namespace App\Http\Repositories;
use App\Models\Post;

class PostRepository
{
    public $model;

    public function __construct(Post $model)
    {
        $this->model = $model ;
    }

    public function createPost($request)
    {
        $request->validate([
            'title' => 'required',
            'status' => 'required',
            'content' => 'required'
        ]);
        return  $this->model->create([
            'title' => $request->title,
            'status' =>  $request->status,
            'content' => $request->content
        ]);
    }

    public function allPost()
    {
        return $this->model->paginate(10);
    }

    public function showByID($id)
    {
        return $this->model->findOrFail($id);
    }

    public function updatePost($request, $slug)
    {
       $request->validate([
              'title' => 'required',
              'status' => 'required',
              'content' => 'required'
          ]);
        $this->model->where('slug',$slug)->update([
              'title' => $request->title,
              'status' =>  $request->status,
              'content' => $request->content
        ]);
        return $this->model;
    }

    public function deletePost($slug)
    {
        $this->model->where('slug',$slug)->delete();
        return $this->model;
    }
}