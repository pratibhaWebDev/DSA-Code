nums1 = [1, 2, 3, 4, 5]
nums2 = [1, 2, 7]

Union=[]
i=0
j=0
while(i<nums1.length && j<nums2.length){
  if(nums1[i]<nums2[j]){
      if (Union.length === 0 || Union[Union.length - 1] !== nums1[i]){
        Union.push(nums1[i]);
      }
      i++
    }
    else if(nums1[i]>nums2[j]){
      if(Union.length===0 || Union[Union.length-1]!==nums2[j]){
        Union.push(nums2[j])
      }
    }else if(Union.length===0 || Union[Union.length-1]!==nums1[i]){
      Union.push(nums1[i])
      i++
      j++
    }
}

while(i<nums1.length){
  if(Union.length==0 || Union[Union.length-1]!==nums1[i]){
    Union.push(nums1[i])
  i++
  }
}

while(j<nums2.length){
  if(Union.length==0 || Union[Union.length-1]!==nums2[j]){
    Union.push(nums2[j])
  j++
  }
}

console.log(Union)