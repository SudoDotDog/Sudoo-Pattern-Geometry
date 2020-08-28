/**
 * @author WMXPY
 * @namespace Pattern_Geometry
 * @description Coordinate
 */

import { Pattern } from "@sudoo/pattern";

export const createCoordinatePattern = (): Pattern => {

    return {

        type: 'map',
        strict: true,
        map: {
            latitude: {
                type: 'number',
            },
            longitude: {
                type: 'number',
            },
        }
    };
};
