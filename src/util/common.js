const round = decimalPlaces => number => +number.toFixed(decimalPlaces);
const roundBy2 = round(2);

export function calculateTalent (players) {
    let power;
    let total;
    const length = players.length;
    power = players.reduce((accum, curr) => {
        const keys = ['fielding', 'running'];
        return accum + Object.entries(curr.stats)
            .reduce((accum, [key, val]) => {
            if (keys.includes(key)) return accum;
            return accum + val;
        }, 0);
    }, 0);
    total = players.reduce((accum, curr) => 
        accum + Object.values(curr.stats).reduce((accum, curr) => accum + curr, 0), 0
    )

    return {
        avgPower: roundBy2(power / length),
        avgTotal: roundBy2(total / length)
    }
}