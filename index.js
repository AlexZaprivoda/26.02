// const FORM = document.forms.login;

// FORM.onsubmit = function(event){
//     event.preventDefault();

//     if(!/.+@.+\..+./.test(this.email.value)){
//         alert("Email invalid!!!");
//         return this.email.focus();
//     }
//     // console.log(this);
//         // (.{0,}[A-Z]+.{0,})
//         // (.{0,}[0-9]+.{0,})

//     if(this.pass.value.match(/.{4}/) && this.pass.value.match(/.{0,}[A-Z]+.{0,}/) && this.pass.value.match(/.{0,}[0-9]+.{0,}/) && this.pass.value.match(/.{0,}[a-z]+.{0,}/)){
//         console.log("OK");
//     } else {
//         alert(this.pass.value);
//         return this.email.focus();
//     }

//     FORM.parentElement.removeChild(FORM);
//     const login = document.createElement("h1");
//     login.innerText = `User ${this.email.value} is login!`;
//     document.body.appendChild(login);
// }

// FORM.send.onclick = function(){
//     this.classList.add("no-valid");
//     console.log(this);
// }.bind(FORM);

var a = [
  {
    name: "1",
    ids: [1, 10],
    line: Math.random().toString(36)
  },
  {
    name: "2",
    ids: [2, 20],
    line: Math.random().toString(36)
  },
  {
    name: "3",
    ids: [3, 30],
    line: Math.random().toString(36)
  },
  {
    name: "4",
    ids: [4, 40],
    line: Math.random().toString(36)
  },
  {
    name: "5",
    ids: [5, 50],
    line: Math.random().toString(36)
  },
  {
    name: "6",
    ids: [6, 60],
    line: Math.random().toString(36)
  }
];

var b = [
  {
    id1: Math.random().toString(36),
    id2: Math.random().toString(36),
    id3: Math.random().toString(36),
    id4: Math.random().toString(36)
  },
  {
    id1: Math.random().toString(36),
    id2: Math.random().toString(36),
    id3: Math.random().toString(36),
    id4: Math.random().toString(36)
  },
  {
    id1: Math.random().toString(36),
    id2: Math.random().toString(36),
    id3: Math.random().toString(36),
    id4: Math.random().toString(36)
  },
  {
    id1: Math.random().toString(36),
    id2: Math.random().toString(36),
    id3: Math.random().toString(36),
    id4: Math.random().toString(36)
  },
  {
    id1: Math.random().toString(36),
    id2: Math.random().toString(36),
    id3: Math.random().toString(36),
    id4: Math.random().toString(36)
  },
  {
    id1: Math.random().toString(36),
    id2: Math.random().toString(36),
    id3: Math.random().toString(36),
    id4: Math.random().toString(36)
  },
  {
    id1: Math.random().toString(36),
    id2: Math.random().toString(36),
    id3: Math.random().toString(36),
    id4: Math.random().toString(36)
  },
  {
    id1: Math.random().toString(36),
    id2: Math.random().toString(36),
    id3: Math.random().toString(36),
    id4: Math.random().toString(36)
  },
  {
    id1: Math.random().toString(36),
    id2: Math.random().toString(36),
    id3: Math.random().toString(36),
    id4: Math.random().toString(36)
  },
  {
    id1: Math.random().toString(36),
    id2: Math.random().toString(36),
    id3: Math.random().toString(36),
    id4: Math.random().toString(36)
  },
  {
    id1: Math.random().toString(36),
    id2: Math.random().toString(36),
    id3: Math.random().toString(36),
    id4: Math.random().toString(36)
  },
  {
    id1: Math.random().toString(36),
    id2: Math.random().toString(36),
    id3: Math.random().toString(36),
    id4: Math.random().toString(36)
  }
];
var c = [];
var d = [];

$export.onclick = function(e) {
  e.preventDefault();

  let buffer = "data:text/csv;charset=utf-8,";

  let separator = "<----->";
  const NEXT_LINE = "\r\n";

  let len = Math.max(a.length, b.length);

  let keys = Object.keys(a[0]);

  keys.push(separator);

  keys = [...keys, ...Object.keys(b[0])];
  keys.push(NEXT_LINE);

  buffer += keys.join(";");

  for (let i = 0; i < len; i++) {
    let line = [];
    if (a[i]) {
      Object.keys(a[0]).forEach(key => {
        line.push(a[i][key]);
      });
    } else {
      Object.keys(a[0]).forEach(key => {
        // line.push(a[i][key]);
        line.push("");
      });
    }
    line.push(separator);

    if (b[i]) {
      Object.keys(b[0]).forEach(key => {
        line.push(b[i][key]);
      });
    } else {
      Object.keys(b[0]).forEach(key => {
        line.push("");
      });
      // line.push("");
    }
    line.push(NEXT_LINE);
    buffer += line.join(";");
  }

  const LINK = document.createElement("a");
  LINK.setAttribute("download", "file.csv");
  LINK.setAttribute("href", encodeURI(buffer));
  document.body.appendChild(LINK);
  LINK.click();
};

$import.onclick = function() {
  const INP = document.createElement("input");
  INP.setAttribute("type", "file");
  INP.onchange = function() {
    const READ = new FileReader();
    READ.readAsText(this.files[0]);
    READ.onload = function() {
      // console.log(this.result);

      let separator = "<----->";
      let line = "\r\n";
      let someArr = [];
      let someArr2 = [];

      let arrAll = this.result.split(line);

      for (let i = 0; i < arrAll.length; i++) {
        someArr.push(arrAll[i].split(separator));
      }

      for (let i = 0; i < someArr.length; i++) {
        for (let j = 0; j < someArr[i].length; j++) {
          if (someArr[i][j]) {
            someArr2.push(someArr[i][j].split(";"));
          }
        }
      }

      let obj1 = {};
      let obj2 = {};

      let keys1 = [];
      let keys2 = [];

      let val1 = [];
      let val2 = [];

      let keys1Arr = someArr2.splice(0, 1);
      for (let i = 0; i < keys1Arr.length; i++) {
        for (let j = 0; j < keys1Arr[i].length; j++) {
          if (!keys1Arr[i][j] == "") {
            keys1.push(keys1Arr[i][j]);
          }
        }
      }
      // console.log(keys1Arr);

      let keys2Arr = someArr2.splice(0, 1);
      for (let i = 0; i < keys2Arr.length; i++) {
        for (let j = 0; j < keys2Arr[i].length; j++) {
          if (!keys2Arr[i][j] == "") {
            keys2.push(keys2Arr[i][j]);
          }
        }
      }
      // console.log(keys2);

      for (let i = 0; i < someArr2.length; i++) {
        if (someArr2[i].length == 4) {
          for (let j = 0; j < someArr2[i].length; j++) {
            if (!someArr2[i][j] == "") {
              val1.push(someArr2[i][j]);
            }
          }
        } else if (someArr2[i].length == 6) {
          for (let j = 0; j < someArr2[i].length; j++) {
            if (!someArr2[i][j] == "") {
              val2.push(someArr2[i][j]);
            }
          }
        }
      }

      while (val1.length >= 3) {
        let buff = val1.splice(0, 3);
        if (buff) {
          for (let j = 0; j < buff.length; j++) {
            if (j == 1) {
              let arrStrToNum = buff[j].split(",");
              arrStrToNum = arrStrToNum.map(e => {
                return parseInt(e);
              });
              // console.log(arrStrToNum);
              obj1[keys1[j]] = arrStrToNum;
            } else obj1[keys1[j]] = buff[j];
          }
          let tempObj = Object.assign({}, obj1);
          c.push(tempObj);
        }
      }

      while (val2.length >= 4) {
        let buff = val2.splice(0, 4);
        if (buff) {
          for (let j = 0; j < buff.length; j++) {
            obj2[keys2[j]] = buff[j];
          }
          let tempObj = Object.assign({}, obj2);
          d.push(tempObj);
        }
      }

      // console.log(a, b, c, d);

      // console.log(keys1, keys2, someArr2);

      //   let headerArr = arr[0].toString().split(separator);
      //   console.log(headerArr);
      //   let header1 = headerArr[0].toString();
      //   let header1Arr = [];
      //   header1Arr.push(header1.slice(0, header1.indexOf(";")));
      //   header1 = header1.slice(header1.indexOf(";") + 1);
      //   header1Arr.push(header1.slice(0, header1.indexOf(";")));
      //   header1 = header1.slice(header1.indexOf(";") + 1);
      //   header1Arr.push(header1.slice(0, header1.indexOf(";")));
      //   header1 = header1.slice(header1.indexOf(";") + 1);
      //   let obj = {};
      //   obj[header1Arr[0]] = "4toto-tam";
      //   obj[header1Arr[1]] = "4toto-tam2";
      //   obj[header1Arr[2]] = "4toto-tam3";
      //   c.push(obj);
      // console.log(arr, header1Arr, header1, c);
    };
  };

  document.body.appendChild(INP);
  INP.click();
};

$test.onclick = function() {
  if (!c.length > 0) {
    alert("Export and import first!");
  } else {
    let eq = _.isEqual(a, c);
    let eq2 = _.isEqual(b, d);
    alert(eq && eq2);
  }
};
