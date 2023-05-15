export function Random(start = 0, end = 1) {
    return Math.random() * (end - start) + start
}

export function Round(number: number) {
    return Math.round(number * 10_000) / 10_000
}