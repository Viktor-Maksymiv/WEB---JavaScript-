const SortLib = {
    preprocessArray: function(arr) {
        let validArr = [];
        let undefinedCount = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === undefined) {
                undefinedCount++;
            } else {
                validArr.push(arr[i]);
            }
        }
        if (undefinedCount > 0) {
            console.log("Знайдено undefined елементів: " + undefinedCount);
        }
        return { validArr, undefinedCount };
    },

    postprocessArray: function(validArr, undefinedCount) {
        let result = [...validArr];
        for (let i = 0; i < undefinedCount; i++) {
            result.push(undefined);
        }
        return result;
    },

    bubbleSort: function(originalArr, isAscending) {
        let { validArr, undefinedCount } = this.preprocessArray(originalArr);
        let comparisons = 0;
        let swaps = 0;
        let n = validArr.length;

        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - 1 - i; j++) {
                comparisons++;
                let condition = isAscending ? validArr[j] > validArr[j + 1] : validArr[j] < validArr[j + 1];
                if (condition) {
                    let temp = validArr[j];
                    validArr[j] = validArr[j + 1];
                    validArr[j + 1] = temp;
                    swaps++;
                }
            }
        }
        console.log("Обмін (Bubble) - Порівнянь: " + comparisons + ", Переміщень: " + swaps);
        return this.postprocessArray(validArr, undefinedCount);
    },

    selectionSort: function(originalArr, isAscending) {
        let { validArr, undefinedCount } = this.preprocessArray(originalArr);
        let comparisons = 0;
        let swaps = 0;
        let n = validArr.length;

        for (let i = 0; i < n - 1; i++) {
            let targetIdx = i;
            for (let j = i + 1; j < n; j++) {
                comparisons++;
                let condition = isAscending ? validArr[j] < validArr[targetIdx] : validArr[j] > validArr[targetIdx];
                if (condition) {
                    targetIdx = j;
                }
            }
            if (targetIdx !== i) {
                let temp = validArr[i];
                validArr[i] = validArr[targetIdx];
                validArr[targetIdx] = temp;
                swaps++;
            }
        }
        console.log("Мінімальних елементів (Selection) - Порівнянь: " + comparisons + ", Переміщень: " + swaps);
        return this.postprocessArray(validArr, undefinedCount);
    },

    insertionSort: function(originalArr, isAscending) {
        let { validArr, undefinedCount } = this.preprocessArray(originalArr);
        let comparisons = 0;
        let swaps = 0;
        let n = validArr.length;

        for (let i = 1; i < n; i++) {
            let key = validArr[i];
            let j = i - 1;

            while (j >= 0) {
                comparisons++;
                let condition = isAscending ? validArr[j] > key : validArr[j] < key;
                if (condition) {
                    validArr[j + 1] = validArr[j];
                    swaps++;
                    j--;
                } else {
                    break;
                }
            }
            validArr[j + 1] = key;
        }
        console.log("Вставок (Insertion) - Порівнянь: " + comparisons + ", Переміщень: " + swaps);
        return this.postprocessArray(validArr, undefinedCount);
    },

    shellSort: function(originalArr, isAscending) {
        let { validArr, undefinedCount } = this.preprocessArray(originalArr);
        let comparisons = 0;
        let swaps = 0;
        let n = validArr.length;

        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < n; i++) {
                let temp = validArr[i];
                let j = i;
                while (j >= gap) {
                    comparisons++;
                    let condition = isAscending ? validArr[j - gap] > temp : validArr[j - gap] < temp;
                    if (condition) {
                        validArr[j] = validArr[j - gap];
                        swaps++;
                        j -= gap;
                    } else {
                        break;
                    }
                }
                validArr[j] = temp;
            }
        }
        console.log("Шелла (Shell) - Порівнянь: " + comparisons + ", Переміщень: " + swaps);
        return this.postprocessArray(validArr, undefinedCount);
    },

    quickSort: function(originalArr, isAscending) {
        let { validArr, undefinedCount } = this.preprocessArray(originalArr);
        let comparisons = 0;
        let swaps = 0;

        function partition(arr, low, high) {
            let pivot = arr[high];
            let i = low - 1;

            for (let j = low; j < high; j++) {
                comparisons++;
                let condition = isAscending ? arr[j] < pivot : arr[j] > pivot;
                if (condition) {
                    i++;
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    swaps++;
                }
            }
            let temp = arr[i + 1];
            arr[i + 1] = arr[high];
            arr[high] = temp;
            swaps++;
            return i + 1;
        }

        function sort(arr, low, high) {
            if (low < high) {
                let pi = partition(arr, low, high);
                sort(arr, low, pi - 1);
                sort(arr, pi + 1, high);
            }
        }

        sort(validArr, 0, validArr.length - 1);
        console.log("Хоара (Quick) - Порівнянь: " + comparisons + ", Переміщень: " + swaps);
        return this.postprocessArray(validArr, undefinedCount);
    }
};