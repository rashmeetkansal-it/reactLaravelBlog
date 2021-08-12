<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use DB;

class NewsApiController extends Controller
{
   public function allBlogs(Request $request)
   {
      $limit = $request->input('limit');
      $offset = $request->input('offset');
      $total = News::count();
      $pagData = DB::table('news')->offset($offset)->limit($limit)->get();
      return response()->json(['result' => $pagData, 'total' => $total]);
   }

   public function show($id)
   {
      $news = News::find($id);
      return response()->json(['result' => $news]);
   }

   public function blogWidget(Request $request)
   {
      $category = $request->input('category');
      $limit = $request->input('limit');
      $pagData = DB::table('news')->where('category', $category)->limit($limit)->get();
      return response()->json(['result' => $pagData]);
   }

   public function login(Request $req)
   {
      $user= User::where('email',$req->email)->first();
      if( !$user || !Hash::check($req->password,$user->password) )
      {
         return ["error"=>"not match"];
      }
      return $user;
   }
   public function register(Request $request)
   {
      $input = $request->all();
      $user= User::where('email',$request->email)->first();
      if($user)
      {
         return ["error"=>"email already exist"];
      }
      $input['password'] = Hash::make($input['password']);
      $user = User::create($input);
      return response()->json(['type' => 'success', 'message' => "Successfully Created"]);
   }
}