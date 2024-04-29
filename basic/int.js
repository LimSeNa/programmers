function solution(flo) {
    const str = flo.toString();
    const arr = str.split('.');
    const answer = Number(arr[0]);

    return answer;
}

solution(69.32);