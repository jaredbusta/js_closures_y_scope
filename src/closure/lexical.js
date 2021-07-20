const buildCount = (i)=>{
    let count = i;
    const displayCount=()=>{
        console.log(count++);
    }
    return displayCount;
}

const mycount = buildCount(10);
mycount();
mycount();
mycount();