
export type TMealProperty = {
    id: number;
    restaurant_id: number,
    category_id: number,
    created_at: string,
    updated_at: string,
    meal: [
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
        }
    ]
} | null;
