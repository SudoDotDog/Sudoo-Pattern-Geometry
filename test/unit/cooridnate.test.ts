/**
 * @author WMXPY
 * @namespace Pattern_Geometry
 * @description Coordinate
 * @override Unit Test
 */

import { Pattern, validatePatternSchema } from "@sudoo/pattern";
import { expect } from "chai";
import * as Chance from "chance";
import { createCoordinatePattern } from "../../src";

describe('Given [Coordinate] helper functions', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('pattern-geometry-coordinate');

    it('should be able to create pattern object', (): void => {

        const pattern: Pattern = createCoordinatePattern();
        const validation: boolean = validatePatternSchema(pattern);

        expect(validation).to.be.true;
    });
});
