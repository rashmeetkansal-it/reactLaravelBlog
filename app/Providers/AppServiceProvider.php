<?php

namespace App\Providers;

use App\Models\Setting;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Builder;
use View;

class AppServiceProvider extends ServiceProvider
{
   /**
    * Bootstrap any application services.
    *
    * @return void
    */
   public function boot()
   {

      $setting = false;
      if (Schema::hasTable('settings')) {
         $setting = Setting::first();
         View::share('app_settings', $setting);
      }

      $year = date('Y');
      $running_year = $year . '-' . ($year + 1);
      $running_session = $setting ? $setting->running_year : $running_year;

      config(['running_session' => $running_session]);
      Builder::macro('whereLike', function($attributes, string $searchTerm) {
         foreach(array_wrap($attributes) as $attribute) {
            $this->orWhere($attribute, 'LIKE', "%{$searchTerm}%");
         }
      
         return $this;
      });

   }

   /**
    * Register any application services.
    *
    * @return void
    */
   public function register()
   {
      //
   }
}
