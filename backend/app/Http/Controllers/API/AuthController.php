<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required | max:191',
            'email' => 'required | email | max:191 | unique:user,email',
            'password' => 'required | min:8',
        ]);

        if ($validator->fails()){
            return response()->json([
               'validation_error' => $validator->messages(),
            ]);
        }else{
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => $request->password,
            ]);
        }
    }


}
