module.exports = function check(str, bracketsConfig) {
  let configitems = [];
  let chcodes = [40, 41, 91, 93, 123, 125, 124];
  let newcodes = ["ro", "rc", "so", "sc", "qo", "qc", "st"];
  let newarr = [];
  let finalstr = '';
  let res = '';
  
  let txtarr = str.split("");

  for(let i = 0; i < txtarr.length; i++){
    let a = txtarr[i].charCodeAt(0);
    if(chcodes.includes(a)) {
      let x = chcodes.indexOf(a)
      newarr.push(newcodes[x])
    } else {
      newarr.push(txtarr[i])
    }
  }

  configitems = bracketsConfig.map((ar) => {
    let first = '';
    let second = '';
    for(let i = 0; i < txtarr.length; i++){
      let a = ar[0].charCodeAt(0);
      let b = ar[1].charCodeAt(0);
      
      if(chcodes.includes(a)) {
        let x = chcodes.indexOf(a)
        first = newcodes[x];
      } else {
        first = ar[0];
      }
      if(chcodes.includes(b)) {
        let y = chcodes.indexOf(b)
        second = newcodes[y];
      } else {
        second = ar[1];
      }
    }
    let strel = first + "" + second;
    return strel;
  });
  
  finalstr = newarr.join("");
  
  /* -------- -----------------------------------------------------------------------------
  console.log(finalstr);
  console.log(configitems);
  */

  const ifexists = (tekshirish) => {
    let mystr = '';
    configitems.forEach((el) => {
      if(tekshirish.includes(el)){
        mystr += "+"
      } else {
        mystr += "";
      }
    })
    //console.log(mystr + " is the final string length: " + mystr.length);
    if (mystr.length > 0) {
      return true
    } else {
      return false
    }
  }

  if(ifexists(finalstr) === false){
    res = finalstr;
  } else {
    while(ifexists(finalstr)){
      configitems.forEach((el) => {
        const regex = new RegExp(el, "g");
        while(finalstr.includes(el)) {
          res = finalstr.replace(regex, "");
          finalstr = res;
          //console.log(" in the end: " + res);
        }
      })
    }
  }

  //console.log(res + " result");
  if(res.length > 0){
    return false;
  } else {
    return true;
  }
  
}
