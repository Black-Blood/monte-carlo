import DotN23 from './DotN23'
import { Round } from './Util'

export default class GraphN23 {
    static get area() {
        return this.getIntegratedY(46) - this.getIntegratedY(23)
    }

    static isUnderGraph(dot: DotN23) {
        return this.getY(dot.x) > dot.y
    }

    static getY(x: number) {
        return Round(
            Math.sin((Math.PI * x) / 46)
        )
    }

    static getIntegratedY(x: number) {
        return Round(
            -1 * (46 / Math.PI) * Math.cos((Math.PI * x) / 46)
        )
    }
}
