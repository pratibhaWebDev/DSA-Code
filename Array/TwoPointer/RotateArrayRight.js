arr=[1,2,3,4,5,6,7]
k=4
n=arr.length
k=k%n
// console.log(k)

temp=[]
for(i=k;i<n;i++){
  temp.push(arr[i])
}
j=0
for(i=0;i<k;i++){
  temp.push(arr[i])}

  console.log(temp)
for(i=0;i<n;i++){
  arr[i]=temp[i]
  
}
console.log(arr)
// console.log(temp)