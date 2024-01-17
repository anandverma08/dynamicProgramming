var helper=(n , memo)=>{
    if(n==1) return 1
    if(n==2) return 2
    if(n in memo) return memo[n]
    else return memo[n] = helper(n-1, memo) + helper(n-2, memo)
}
var climbStairs = function(n) {
    let memo = {}
    return helper(n, memo)
};