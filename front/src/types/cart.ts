export type TCart = {
    id: number,
    name: string,
    quantity: number,
    price?: number,
    // img:string
};
export type TCartProperty =
    {
        id: number,
        name: string,
        name_ar: string,
        description: string,
        description_ar: string,
        created_at: string,
        updated_at: string,
        pivot: {
            restaurant_category_id: number,
            meal_id: number
        }
    } | null;
