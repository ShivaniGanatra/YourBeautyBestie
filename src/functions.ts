import type { Product } from "./interfaces";

export const getBrightness = (hex:string) => {    
    hex = hex.replace('#', '');
    if (hex.length === 3) {
        hex = hex.split('').map((char: string) => char + char).join('');
    }
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        const brightness = (r * 0.299) + (g * 0.587) + (b * 0.114);
        const brightnessAsAString = brightness.toString().slice(0,3);
        return parseFloat(brightnessAsAString);
    }

export const cleanedProductsData = (anyData: any[]): Product[] => {
    return anyData.map((item) => ({
        id: item.id,
        image_link: item.image_link,
        name: item.name,
        description: item.description,
        brand: item.brand,
        product_type: item.product_type,
        product_colors: item.product_colors,
        price:item.price
        }));
    };


 