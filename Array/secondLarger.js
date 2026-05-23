arr=[5,4,3,2,1]
first =-Infinity
second=-Infinity
for(let i=0;i<arr.length;i++){
  if(first<arr[i]){
    second=first
    first=arr[i]
  }
  else if(second<arr[i] && arr[i]!=first){
    second=arr[i]
  }
}
console.log(second)
console.log(first)