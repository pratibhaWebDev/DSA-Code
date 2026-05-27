arr=[1,1,2,2,2,3,3]

if(arr.length==0) console.log(0)

let k=1
for(let i=1;i<arr.length;i++){
  if(arr[i]!=arr[i-1]){
    
    arr[k]=arr[i]
    k++
    // console.log(arr[k])
  }
}
console.log(k)
arr.length=k
console.log("remove duplicate",arr)