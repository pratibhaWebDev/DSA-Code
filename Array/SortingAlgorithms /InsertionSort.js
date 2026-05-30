arr=[4,5,1,3,2]

for(let i=1;i<arr.length;i++){
  let current = arr[i]
  let j = i-1
  while(j>=0 && arr[j]>current){
    arr[j+1]=arr[j]
    j--
  }
  arr[j+1]=current
}
console.log(arr)