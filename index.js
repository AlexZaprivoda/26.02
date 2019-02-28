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
      let separator = "<----->";
      let line = "\r\n";
      let someArr = [];
      let someArr2 = [];

      let arrAll = this.result.split(line);
      arrAll.forEach(e => {
        someArr.push(e.split(separator));
      });

      someArr.forEach(e => {
        e.forEach(e => {
          if (e) {
            someArr2.push(e.split(";"));
          }
        });
      });

      let obj1 = {};
      let obj2 = {};

      let keys1 = [];
      let keys2 = [];

      let val1 = [];
      let val2 = [];

      let keys1Arr = someArr2.splice(0, 1);

      keys1Arr.forEach(e => {
        e.forEach(e => {
          if (!e == "") {
            keys1.push(e);
          }
        });
      });

      let keys2Arr = someArr2.splice(0, 1);

      keys2Arr.forEach(e => {
        e.forEach(e => {
          if (!e == "") {
            keys2.push(e);
          }
        });
      });

      someArr2.forEach(e => {
        if (e.length == 4) {
          e.forEach(e => {
            if (!e == "") {
              val1.push(e);
            }
          });
        } else if (e.length == 6) {
          e.forEach(e => {
            if (!e == "") {
              val2.push(e);
            }
          });
        }
      });

      while (val1.length >= 3) {
        let buff = val1.splice(0, 3);
        if (buff) {
          buff.forEach((e, i) => {
            if (i == 1) {
              let arrStrToNum = e.split(",");
              arrStrToNum = arrStrToNum.map(e => {
                return parseInt(e);
              });
              obj1[keys1[i]] = arrStrToNum;
            } else obj1[keys1[i]] = e;
          });
          let tempObj = Object.assign({}, obj1);
          c.push(tempObj);
        }
      }

      while (val2.length >= 4) {
        let buff = val2.splice(0, 4);
        if (buff) {
          buff.forEach((e, i) => {
            obj2[keys2[i]] = e;
          });
          let tempObj = Object.assign({}, obj2);
          d.push(tempObj);
        }
      }
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
