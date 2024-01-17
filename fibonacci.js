function helper(n, dp){
    if(n <= 1) return n;
    if(dp[n] != undefined) return dp[n];   
    return dp[n] = helper(n - 1, dp) + helper(n - 2, dp);   
}
var fib = function(n) {
    let dp = [];
    helper(n, dp);
    return dp[n] || n;
};