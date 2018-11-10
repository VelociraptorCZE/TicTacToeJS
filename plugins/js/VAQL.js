/*
VAQL
Copyright (C) Simon Raichl 2018
MIT License
Use this as you want, share it as you want, do basically whatever you want with this :)
*/

Array.prototype.findInArray = function(val, mode = 1) {
    let res = null;
    let i = 0;
    let isAssigned = false;
    let assign = (condition = (!isAssigned)) => {
        condition ? (() => { res = i; isAssigned = true; })() : null;
    };
    let err = (mode) =>{
        throw "following mode: " + mode + " is a invalid mode!";
    };
    this.forEach((item) => {
        if (item === val){
            assign((mode === 2 || mode === "last") || (mode === 1 && !isAssigned));
            if (mode === 3 || mode === "all"){
                assign();
                let temp = res;
                if (typeof res !== "object"){
                    res = [];
                    res.push(temp);
                }
                else{
                    res = temp;
                    res.push(i);
                }
            }
            else{
                (mode < 1 || mode > 3) ? err(mode) : null;
            }
        }
        i++;
    });
    return res;
};

Array.prototype.sortArray = function(direction) {
    let buffer;
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
            if (direction === "reverse" ? this[i] > this[j] : this[i] < this[j]){
                buffer = this[j];
                this[j] = this[i];
                this[i] = buffer;
            }
        }
    }
    return this;
};

Array.prototype.average = function(decimalPlaces) {
    let num = null, res;
    this.forEach((item) => {
        num === null ? num = 0 : null;
        num += item;
    });
    res = num / this.length;
    return decimalPlaces !== void 0 ? parseFloat((res).toFixed(decimalPlaces)) : res;
};

Array.prototype.compareArrays = function(array) {
  let res = true;
  this.length === array.length ? (() => {
      for (let i = 0; i < this.length; i++){
          if (this[i] != array[i]){
              res = false;
              break;
          }
      }
  })() : res = false;
  return res;
};
