
  export const getBrightness = (hex:string) => {
    // 1. Remove the '#' if it's there
    hex = hex.replace('#', '');

    // 2. Convert 3-digit hex to 6-digit (e.g., #FB0 -> #FFBB00)
    if (hex.length === 3) {
        hex = hex.split('').map((char: string) => char + char).join('');
    }

        // 3. Extract RGB components using parseInt with base 16
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        // 4. Apply the perceived brightness formula
        const brightness = (r * 0.299) + (g * 0.587) + (b * 0.114);

        const brightnessAsAString = brightness.toString().slice(0,3);
        return parseFloat(brightnessAsAString);
    }

    // Example Usage
    const color = "#7C431D";
    const value = getBrightness(color);

    console.log(`Brightness: ${value}`); 
    // Output: Brightness: 184.96
    console.log(typeof value);

 