<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($id)
    {
    
        $data = Order::whereHas('user', function ($q) use ($id) {
            $q->where('user_id', $id);
        })->with(['items', 'items.meal', 'items.meal.media'])->get();
        return response()->json(['data' => $data]);

        // $data = Order::with('items', 'items.meal', 'items.meal.media')->where('user_id',$id)->get();
        // return response()->json(['data' => $data]);
    
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrderRequest $request)
    {
        $order = Order::create($request->validated());
        if ($request->items) {
            $order->items()->attach($request->items);
        }
        return response()->json(['message' => 'successfully!']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        $data = $order->load(['items', 'items.meal', 'items.meal.media']);
        return response()->json(['data' => $data]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrderRequest $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}
