function convertFtoC(F) {
    let final = '';
    let inputData = typeof (F);
    if (typeof (F) === 'string' || typeof (F) === 'number') {
      let converted = Number(F);
      let C = (converted - 32) * 5 / 9;
      let celcius = C.toFixed(4);
      return celcius;
    }
    if (toString.call(F) === "[object Array]") {
  
      let arrayValue = JSON.stringify(F);
      return final = `${arrayValue} is not a valid number but an Array.`
    }
    if (F instanceof Object) {
      let objectValue = JSON.stringify(F);
      return finallu = `${objectValue} is not a valid number but an object.`
    }
    else {
      final = `${JSON.stringify(F)} is not a valid number but a/an ${inputData}.`
      return final;
    }
  }
  
  
  function checkYuGiOh(n) {

    try {
      let arr = [...new Array(Number(n))].map((_value, index) => {index++;
        
        const [_2, _3, _5] = ["yu", "gi", "oh"];
        if (index % 2 === 0 && index % 3 === 0 && index % 5 === 0)
        return _2 + "-" + _3 + "-" + _5;
        else if (index % 2 === 0 && index % 3 == 0) return _2 + "-" + _3;
        else if (index % 2 === 0 && index % 5 === 0) return _2 + "-" + _5;
        else if (index % 3 === 0 && index % 5 === 0) return _3 + "-" + _5;
        else if (index % 2 === 0) return _2;
        else if (index % 3 === 0) return _3;
        else if (index % 5 === 0) return _5;
        return index;
      });
      return arr;
    } catch (err) {
      return `'${n}' is an invalid parameter`;
    }
  }
  // console.log(checkYuGiOh(15));
  