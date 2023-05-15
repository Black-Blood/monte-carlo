import DotN23 from './DotN23'
import GraphN23 from './GraphN23'
import { Round } from './Util'

export default class QualityN23 {
    readonly listOfDots: DotN23[][] = []
    readonly listOfDotsAnderGraph: number[] = []
    readonly listOfArea: number[] = []

    constructor(countOfDots: number) {
        this.listOfDots = this.createListOfRandomDots(countOfDots)
        this.listOfDotsAnderGraph = this.listOfDots.map(dots => this.countOfDotsUnderGraph(dots))
        this.listOfArea = this.listOfDotsAnderGraph.map(k => this.calcArea(k))
    }

    get expectation() {
        return Round(
            this.listOfArea.reduce((sum, s) => sum += s, 0) / 20
        )
    }

    get dispersion() {
        return Round(
            1 / 23 * this.listOfArea.reduce((sum, s) => sum += (s - this.expectation) ** 2, 0)
        )
    }

    get standartDeviation() {
        return Round(
            this.dispersion ** 0.5
        )
    }

    get approximationError() {
        return Round(
            Math.abs(this.expectation - GraphN23.area)
        )
    }

    private createListOfRandomDots(countOfDots: number) {
        return Array.from(Array(20).keys()).map(
            () => Array.from(Array(countOfDots).keys()).map(
                () => new DotN23()
            )
        )
    }

    private countOfDotsUnderGraph(dots: DotN23[]) {
        return dots.reduce((k, dot) => k + Number(GraphN23.isUnderGraph(dot)), 0)
    }

    private calcArea(k: number) {
        return Round(
            23 * k / this.listOfDots[0].length
        )
    }
}
