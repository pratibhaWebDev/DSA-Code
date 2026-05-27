arr=[5,2,4,1,3]

for(let i=0;i<arr.length;i++){
  let min=i
  for(let j=i+1;j<arr.length;j++){
    if(arr[j]<arr[min]){
      min=j
    }
    
    // console.log(arr)
  }
  let temp=arr[i]
    arr[i]=arr[min]
    arr[min]=temp
 
}
 console.log(arr)
