
exports.min = function min (array) {
    return min = (!arguments.length || !arguments[0].length) ?
                 0 :
                 Math.min(...array);
}

exports.max = function max (array) {
    return max = (!arguments.length || !arguments[0].length) ?
                 0 :
                Math.max(...array);
}

exports.avg = function avg (array) {
    return newArr = (!arguments.length || !arguments[0].length) ?
                    0 :
                    (array.reduce((acc, curr) => acc + curr) / array.length);
}
