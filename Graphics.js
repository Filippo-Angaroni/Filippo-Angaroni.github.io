const direction = Object.freeze({
    TR: 0,
    T: 1,
    TL: 2,
    R: 2,
    C: 4,
    L: 5,
    BR: 6,
    B: 7,
    BL: 8
});

function MenuHeaderBackgroundClippingPath(barHeight, curveWidth, height, width){
    var a = width / 2 - curveWidth / 2;
    var curve1 = `L ${a - 20} ${barHeight} C ${a - 7.5} ${barHeight}, ${a} ${barHeight+7.5}, ${a} ${barHeight+20}`;
    return `M 0 0 L 0 ${barHeight} ${curve1} L ${width / 2 - curveWidth / 2} ${height} L ${width / 2 + curveWidth / 2} ${height} L ${width / 2 + curveWidth / 2} ${barHeight} L ${width} ${barHeight} L ${width} 0 z`;
}


function curve(startPoint, endPoint, relativeControlPoint1, realativeControlPoint2){
    return `L ${startPoint[0]} ${startPoint[1]} C ${relativeControlPoint1[0]} ${relativeControlPoint1[1]}, ${realativeControlPoint2[0]} ${realativeControlPoint2[1]}, ${endPoint[0]} ${endPoint[1]}`;
}

function curve(point, control, direction){
    return curve(point);
}
