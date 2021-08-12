<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\product;

class productController extends Controller
{
    //
    public function addProduct(Request $req)
    {
        if ($file = $req->file('file_path')) {
            $path = $file->store('public/products');
         
        } 
        $product=new Product;
        $product->name = $req->input('name');
        $product->description = $req->input('description');
        $product->price = $req->input('price');
        $product->file_path = $path;
        $product->save(); //
        return response()->json(['result' => $product]);
    }
    public function list()
    {
        return Product::all();

    }
    public function delete($id)
    {
        $result = Product::where('id',$id)->delete();
        if($result)
        return ["result"=>"Successfully Deleted"];
        else
        return ["result"=>"failed"];

    }
    public function getProduct($id)
    {
        try {
        $result = Product::find($id);
        } catch (ModelNotFoundException $exception) {
        return back()->withError($exception->getMessage())->withInput();
       }
       return $result;
    }
    public function updateProduct(Request $req,$id)
    {
        echo $req->input('name');
        die();
        try {
        $result = Product::find($id);
        if ($file = $req->file('file_path')) {
            $path = $file->store('public/products');
            $result->file_path = $path;
         } 
        $result->name = $req->input('name');
        $result->description = $req->input('description');
        $result->price = $req->input('price');
        $result->save();
        } catch (ModelNotFoundException $exception) {
        return back()->withError($exception->getMessage())->withInput();
       }
       return $result;
    }
    public function searchProduct(Request $req)
    {
        
        try {
           $searchTerm=$req->srchtext;
           if($searchTerm)
          $result = Product::whereLike(['name', 'description'], $searchTerm)->get();
          else
          $result = Product::all();
        } catch (ModelNotFoundException $exception) {
        return back()->withError($exception->getMessage())->withInput();
       }
       return $result;
    }
}
