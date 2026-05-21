arr1=[1,2,3,4,5]
arr2=[2,3,4,4,5]
union=[]
for(i=0;i<arr1.length;i++){
  let found=false
  for(j=0;j<union.length;j++){
    if(arr1[i]===union[j]){
      found=true
      break
    }
  }
   if(!found){
      union.push(arr1[i])
    }
}
for(i=0;i<arr2.length;i++){
  let found=false
  for(j=0;j<union.length;j++){
    if(arr2[i]===union[j]){
      found=true
      break
    }
   
  }
   if(!found){
      union.push(arr2[i])
    }

}
console.log(union)