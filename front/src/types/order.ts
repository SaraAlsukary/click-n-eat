export type TMeal = {
    description: string,
    description_ar: string,
    id: number,
    media: []
    name: string,
    name_ar: string,
}

export type TOrder = {
    firstName: string,
    lastName: string,
    bankNumber: number,
    address: string,
    created_at: string,
    phone: number,
    bankPassword: string,
    priceTotal: number,
    type: string,
    items: [
        {
            id: number,
            meal: TMeal,
            meal_id: number,
            price: number
        }]

}
