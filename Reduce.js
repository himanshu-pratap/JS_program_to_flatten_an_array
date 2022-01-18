var arr= [1,2,3,[4,5,[6,7,8],9],[10,11,12],[[[13,14,15]],16],[17]]

const flatten=(arr) =>{
    newarr=arr.reduce((flat,item)=>{
        if(Array.isArray(item)){
            flat=flat.concat(flatten(item));
        }
        else{
            flat.push(item);
        }
        return flat;
    },[])
    return newarr;
}
console.log(flatten(arr))