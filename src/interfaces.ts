

export interface ShadeInterface {
    hex_value: string;
    colour_name: string;
}

export interface Product {
    id: number;
    image_link: string;
    name: string;
    description: string;
    brand: string;
    product_type: string;
    product_colors: ShadeInterface[];
    price:string
}

