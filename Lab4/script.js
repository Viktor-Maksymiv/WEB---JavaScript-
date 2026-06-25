let denseArray = [];
for (let i = 0; i < 100; i++) {
    denseArray.push(Math.floor(Math.random() * 1000));
}

let sparseArray = [];
for (let i = 0; i < 100; i++) {
    if (i > 40 && i < 60) {
        sparseArray[i] = undefined;
    } else {
        sparseArray[i] = Math.floor(Math.random() * 1000);
    }
}

console.log("=== Нерозріджений масив (без undefined) ===");
console.log("Оригінал:", denseArray);

console.log("--- Сортування за зростанням ---");
let bubbleRes = SortLib.bubbleSort(denseArray, true);
let selectionRes = SortLib.selectionSort(denseArray, true);
let insertionRes = SortLib.insertionSort(denseArray, true);
let shellRes = SortLib.shellSort(denseArray, true);
let quickRes = SortLib.quickSort(denseArray, true);

console.log("\n=== Розріджений масив (з undefined) ===");
console.log("Оригінал:", sparseArray);

console.log("--- Сортування за спаданням ---");
let bubbleSparseRes = SortLib.bubbleSort(sparseArray, false);
let selectionSparseRes = SortLib.selectionSort(sparseArray, false);
let insertionSparseRes = SortLib.insertionSort(sparseArray, false);
let shellSparseRes = SortLib.shellSort(sparseArray, false);
let quickSparseRes = SortLib.quickSort(sparseArray, false);