var generateBuilding = function (index) {
    var totalFloors = 10000;
    var falseFloors = new Array(totalFloors).fill(true);
    for (var i = 0; i < index; i++) {
        falseFloors[i] = false;
    }
    return falseFloors;
};
var binarySearchBalls = function (building) {
    var lo = 0;
    var hi = building.length;
    var counter = 0;
    // first ball until breaks
    do {
        var midPoint = Math.floor(lo + (hi - lo) / 2);
        var value = building[midPoint];
        counter = counter + 1;
        if (value === true) {
            hi = midPoint;
            break;
        }
        else {
            lo = midPoint + 1;
        }
    } while (lo < hi);
    // When breaks only you can lookup from 0 to k
    for (var j = lo; j < hi; j++) {
        counter = counter + 1;
        if (building[j]) {
            break;
        }
    }
    return counter;
};
var stepsBySqrtOFN = function (building) {
    var jmpAmount = Math.floor(Math.sqrt(building.length));
    var i = jmpAmount;
    var opsCounter = 0;
    for (; i < building.length; i += jmpAmount) {
        opsCounter = opsCounter + 1;
        if (building[i]) {
            break;
        }
    }
    i -= jmpAmount;
    for (var j = 0; j < jmpAmount && i < building.length; ++j, ++i) {
        opsCounter = opsCounter + 1;
        if (building[i]) {
            break;
        }
    }
    return opsCounter;
};
var cubeRootOFN = function (building) {
    var jmpAmount = Math.floor(Math.cbrt(building.length));
    var i = jmpAmount;
    var opsCounter = 0;
    for (; i < building.length; i += jmpAmount) {
        opsCounter = opsCounter + 1;
        if (building[i]) {
            break;
        }
    }
    i -= jmpAmount;
    for (var j = 0; j < jmpAmount && i < building.length; ++j, ++i) {
        opsCounter = opsCounter + 1;
        if (building[i]) {
            break;
        }
    }
    return opsCounter;
};
var testFloors = [2, 2500, 3000, 4232, 5000, 5432, 6233, 8931, 9999];
//Binary Search
console.log("\n\n\n***************OPS DONE***************\n");
testFloors.forEach((function (startFloorForBreak) {
    console.log("\n\n________FLOOR IN BREAK ".concat(startFloorForBreak, "________\n"));
    var building = generateBuilding(startFloorForBreak);
    var numOfOpsBinary = binarySearchBalls(building);
    var numOfOpsSqrt = stepsBySqrtOFN(building);
    var numOfOpsCube = cubeRootOFN(building);
    console.log("Binary | Sqrt | CubeRoot");
    console.log("".concat(numOfOpsBinary, " | ").concat(numOfOpsSqrt, " | ").concat(numOfOpsCube));
}));
