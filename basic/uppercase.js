function solution(my_string, alp) {
    const regExp = new RegExp(`${alp}`, 'g'); // RegExp 생성자 함수 사용하여 동적으로 정규 표현식 생성
    const answer = my_string.replace(regExp, alp.toUpperCase());
    console.log(answer);
    return answer;
}

solution("programmers", "m");