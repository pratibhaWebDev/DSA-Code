let nums = [1, 1, 0, 1, 1, 1];

let count=0
let max=0

for(i=0;i<nums.length;i++){
  if(nums[i]===1){
    count++
  }else{
    count=0
  }
  max=Math.max(max,count)

}
console.log(max)