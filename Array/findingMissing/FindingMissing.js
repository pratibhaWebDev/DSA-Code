nums=[8, 2, 4, 5, 3, 7, 1];


for(i=1;i<nums.length;i++){
  let found=false
  for(j=0;j<nums.length;j++){
    if(nums[j]==i){
      found=true
      break;
    }
  }
  if(!found){
    console.log(i)
  }
}


