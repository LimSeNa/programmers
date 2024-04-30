function solution(arr) {
    const emptyArr = [];

    for (i = 0; i < arr.length; i++) {
        for (j = 1; j <= arr[i]; j++) {
            emptyArr.push(arr[i]);
        }
    }

    return emptyArr;
}

solution([5, 1, 4]);