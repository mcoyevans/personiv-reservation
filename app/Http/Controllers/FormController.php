<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Form;

use Auth;
use Carbon\Carbon;
use DB;
use Gate;

class FormController extends Controller
{
    /**
     * Display a listing of the resource with parameters.
     *
     * @return \Illuminate\Http\Response
     */
    public function enlist(Request $request)
    {
        $forms = Form::query();

        if($request->has('withTrashed'))
        {
            $forms->withTrashed();
        }

        if($request->has('where'))
        {
            for ($i=0; $i < count($request->where); $i++) { 
                $forms->where($request->input('where')[$i]['label'], $request->input('where')[$i]['condition'], $request->input('where')[$i]['value']);
            }
        }

        if($request->has('search'))
        {
            $forms->where('name', 'like', '%'.$request->search.'%')->orWhere('description', 'like', '%'.$request->search.'%');
        }

        if($request->has('paginate'))
        {
            return $forms->paginate($request->paginate);
        }

        if($request->has('first'))
        {
            return $forms->first();
        }

        return $forms->get();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}