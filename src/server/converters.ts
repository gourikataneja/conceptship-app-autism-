// converters.ts

/**
 * Converts various units.
 */

/**
 * Converts length from meters to kilometers.
 * @param {number} meters - The length in meters.
 * @returns {number} - The length in kilometers.
 */
export function metersToKilometers(meters: number): number {
    return meters / 1000;
}

/**
 * Converts kilometers to meters.
 * @param {number} kilometers - The length in kilometers.
 * @returns {number} - The length in meters.
 */
export function kilometersToMeters(kilometers: number): number {
    return kilometers * 1000;
}

/**
 * Converts grams to kilograms.
 * @param {number} grams - The weight in grams.
 * @returns {number} - The weight in kilograms.
 */
export function gramsToKilograms(grams: number): number {
    return grams / 1000;
}

/**
 * Converts kilograms to grams.
 * @param {number} kilograms - The weight in kilograms.
 * @returns {number} - The weight in grams.
 */
export function kilogramsToGrams(kilograms: number): number {
    return kilograms * 1000;
}

/**
 * Converts Celsius to Fahrenheit.
 * @param {number} celsius - The temperature in Celsius.
 * @returns {number} - The temperature in Fahrenheit.
 */
export function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}

/**
 * Converts Fahrenheit to Celsius.
 * @param {number} fahrenheit - The temperature in Fahrenheit.
 * @returns {number} - The temperature in Celsius.
 */
export function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5/9;
}

/**
 * Converts liters to gallons.
 * @param {number} liters - The volume in liters.
 * @returns {number} - The volume in gallons.
 */
export function litersToGallons(liters: number): number {
    return liters / 3.78541;
}

/**
 * Converts gallons to liters.
 * @param {number} gallons - The volume in gallons.
 * @returns {number} - The volume in liters.
 */
export function gallonsToLiters(gallons: number): number {
    return gallons * 3.78541;
}
