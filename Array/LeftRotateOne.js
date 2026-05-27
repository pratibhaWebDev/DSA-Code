arr=[1,2,3,4]
k=2 
temp=[]

for(let i=0;i<k;i++){
  temp.push(arr[i])
}
console.log(temp)
j=0
for(let i=k;i<arr.length;i++){
  arr[j]=arr[i]
  j++
}
for(let i=0;i<temp.length;i++){
  arr[j]=temp[i]
  j++
}
console.log(arr)
