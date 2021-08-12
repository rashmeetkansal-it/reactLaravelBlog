<?php


Route::get('/allBlogs', 'Api\NewsApiController@allBlogs');
Route::get('/blog/{id}', 'Api\NewsApiController@show');

Route::get('/blogWidget', 'Api\NewsApiController@blogWidget');

//login and signup
Route::post('/login', 'Api\NewsApiController@login');
Route::post('/signup', 'Api\NewsApiController@register');

//products Apis
Route::post('/addProduct', 'Api\productController@addProduct');
Route::get('/products', 'Api\productController@list');
Route::delete('/delete/{id}', 'Api\productController@delete');
Route::put('/updateProduct/{id}', 'Api\productController@updateProduct');
Route::get('/product/{id}', 'Api\productController@getProduct');
Route::post('/searchProduct', 'Api\productController@searchProduct');