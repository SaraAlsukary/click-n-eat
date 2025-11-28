<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'type' => 'required|string',
            'phone' => 'required',
            'address' => 'required|string',
            'bankNumber' => 'required',
            'bankPassword' => 'required',
            'firstName' =>  'required|string',
            'lastName' => 'required|string',
            'priceTotal' => 'required',
        ];
    }

    public function validated($key = null, $default = null)
    {
        return [
            'type' => $this->type,
            'phone' => $this->phone,
            'address' => $this->address,
            'bankNumber' => $this->bankNumber,
            'bankPassword' => $this->bankPassword,
            'firstName' =>  $this->firstName,
            'lastName' => $this->lastName,
            'priceTotal' => $this->priceTotal,
            'user_id' => auth()->id(),
        ];
    }
}
