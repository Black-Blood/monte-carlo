import { Random, Round } from './Util'

export default class DotN23 {
    readonly x: number
    readonly y: number

    constructor(x?: number, y?: number) {
        this.x = Round(x !== undefined ? x : Random(23, 46))
        this.y = Round(y !== undefined ? y : Random())

        if (
            this.x < 23 || this.x > 46
            ||
            this.y < 0 || this.y > 1
        ) {
            throw new Error('x or y is out of range')
        }
    }
}
