/**
 * Luna Paint API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Recipe model module.
 * @module model/Recipe
 * @version 0.1.0
 */
class Recipe {
    /**
     * Constructs a new <code>Recipe</code>.
     * @alias module:model/Recipe
     * @param id {String} 
     * @param colorId {String} 
     * @param created {String} 
     * @param price {Number} 
     * @param priceKg {Number} 
     */
    constructor(id, colorId, created, price, priceKg) { 
        
        Recipe.initialize(this, id, colorId, created, price, priceKg);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, colorId, created, price, priceKg) { 
        obj['id'] = id;
        obj['colorId'] = colorId;
        obj['created'] = created;
        obj['price'] = price;
        obj['price_kg'] = priceKg;
    }

    /**
     * Constructs a <code>Recipe</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Recipe} obj Optional instance to populate.
     * @return {module:model/Recipe} The populated <code>Recipe</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Recipe();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('colorId')) {
                obj['colorId'] = ApiClient.convertToType(data['colorId'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('price_kg')) {
                obj['price_kg'] = ApiClient.convertToType(data['price_kg'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Recipe</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Recipe</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Recipe.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['colorId'] && !(typeof data['colorId'] === 'string' || data['colorId'] instanceof String)) {
            throw new Error("Expected the field `colorId` to be a primitive type in the JSON string but got " + data['colorId']);
        }
        // ensure the json data is a string
        if (data['created'] && !(typeof data['created'] === 'string' || data['created'] instanceof String)) {
            throw new Error("Expected the field `created` to be a primitive type in the JSON string but got " + data['created']);
        }

        return true;
    }


}

Recipe.RequiredProperties = ["id", "colorId", "created", "price", "price_kg"];

/**
 * @member {String} id
 */
Recipe.prototype['id'] = undefined;

/**
 * @member {String} colorId
 */
Recipe.prototype['colorId'] = undefined;

/**
 * @member {String} created
 */
Recipe.prototype['created'] = undefined;

/**
 * @member {Number} price
 */
Recipe.prototype['price'] = undefined;

/**
 * @member {Number} price_kg
 */
Recipe.prototype['price_kg'] = undefined;






export default Recipe;
