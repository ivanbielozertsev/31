
let array = [1,3,[5,["hj"]],"rgd", [2,3,[3,1]]];

function flat(arr) {
  let res = [];
  
  !function innerFlat(arr) {
    arr.forEach((item, index) => {
      Array.isArray(item) ? innerFlat(item) : res.push(item);
      
    })
  }(arr);
    return res;
}


console.log('res', flat(array));