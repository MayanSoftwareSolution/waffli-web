<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::inertia('/privacy',          'legal/privacy')->name('privacy');
Route::inertia('/terms',            'legal/terms')->name('terms');
Route::inertia('/account-deletion', 'legal/account-deletion')->name('account-deletion');
Route::inertia('/support',          'legal/support')->name('support');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
