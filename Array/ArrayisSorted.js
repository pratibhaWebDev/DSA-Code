arr=[1,2,3,4,5,5,6,7,8,9]

let count=0
for(let i=1;i<arr.length;i++){
  if(arr[i]>=arr[i-1]){
    count++
  }
}
if(count+1==arr.length){
  console.log(true)
}
else{
  console.log(false)
}
console.log(count)