const fib = (n, memo = {}) => {
    if(n in memo) return memo[n]; //Memonization
    if(n <= 2) return 1;
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
}

console.log(fib(299));
console.log(fib(100)); 