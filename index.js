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

var a =[{
    name: "1",
    ids: [1,10],
    line: Math.random().toString(36)
},{
    name: "2",
    ids: [2,20],
    line: Math.random().toString(36)
},{
    name: "3",
    ids: [3,30],
    line: Math.random().toString(36)
},{
    name: "4",
    ids: [4,40],
    line: Math.random().toString(36)
},{
    name: "5",
    ids: [5,50],
    line: Math.random().toString(36)
},
{
    name: "6",
    ids: [6,60],
    line: Math.random().toString(36)
}];

var b = [{
        id1: Math.random().toString(36),
        id2: Math.random().toString(36),
        id3: Math.random().toString(36),
        id4: Math.random().toString(36)
    },{
        id1: Math.random().toString(36),
        id2: Math.random().toString(36),
        id3: Math.random().toString(36),
        id4: Math.random().toString(36)
    },{
        id1: Math.random().toString(36),
        id2: Math.random().toString(36),
        id3: Math.random().toString(36),
        id4: Math.random().toString(36)
    },{
        id1: Math.random().toString(36),
        id2: Math.random().toString(36),
        id3: Math.random().toString(36),
        id4: Math.random().toString(36)
    },{
        id1: Math.random().toString(36),
        id2: Math.random().toString(36),
        id3: Math.random().toString(36),
        id4: Math.random().toString(36)
    },{
         id1: Math.random().toString(36),
         id2: Math.random().toString(36),
         id3: Math.random().toString(36),
         id4: Math.random().toString(36)
    },{
        id1: Math.random().toString(36),
        id2: Math.random().toString(36),
        id3: Math.random().toString(36),
        id4: Math.random().toString(36)
    },{
        id1: Math.random().toString(36),
        id2: Math.random().toString(36),
        id3: Math.random().toString(36),
        id4: Math.random().toString(36)
    },{
        id1: Math.random().toString(36),
        id2: Math.random().toString(36),
        id3: Math.random().toString(36),
        id4: Math.random().toString(36)
    },{
        id1: Math.random().toString(36),
        id2: Math.random().toString(36),
        id3: Math.random().toString(36),
        id4: Math.random().toString(36)
    },{
        id1: Math.random().toString(36),
        id2: Math.random().toString(36),
        id3: Math.random().toString(36),
        id4: Math.random().toString(36)
    },{
        id1: Math.random().toString(36),
        id2: Math.random().toString(36),
        id3: Math.random().toString(36),
        id4: Math.random().toString(36)
    }];

    $export.onclick = function(e){
        e.preventDefault();

        let buffer = "data:text/csv;charset=utf-8,";

        let separator = "<----->"
        const NEXT_LINE = "\r\n";

        let len = Math.max(a.length,b.length);

        let keys = Object.keys(a[0]);
        keys.push(separator);

        keys = [...keys,...Object.keys(b[0])];
        keys.push(NEXT_LINE);

        buffer += keys.join(";");

            for (let i=0; i<len;i++){
                
                let line =[];
                if(a[i]){
                    Object.keys(a[0]).forEach(key =>{
                        line.push(a[i][key]);
                    });
                } else {
                    Object.keys(a[0]).forEach(key =>{
                        // line.push(a[i][key]);
                    line.push("");
                        
                    });
                }
                line.push(separator);
                

                if(b[i]){
                    Object.keys(b[0]).forEach(key =>{
                        line.push(b[i][key]);
                    });
                } else {
                    Object.keys(b[0]).forEach(key =>{
                        line.push("");
                    });
                    // line.push("");
                }
                line.push(NEXT_LINE);
                buffer += line.join(";");
            }

        const LINK = document.createElement("a");
        LINK.setAttribute("download","file.csv");
        LINK.setAttribute("href", encodeURI(buffer));
        document.body.appendChild(LINK);
        LINK.click();
    }
            
    $import.onclick = function(){

        const INP = document.createElement("input");
        INP.setAttribute("type","file");

        INP.onchange = function(){
            const READ = new FileReader();
            READ.readAsText(this.files[0]);
            READ.onload = function() {
                let c = [];
                let d = [];

                let separator = "<----->";
                let line = "\r\n";
                // let c = ;
                // let d = c.slice(0, c.indexOf(separator));
                let arr = this.result.split(line);
                let headerArr = arr[0].toString().split(separator);
                let header1 = headerArr[0].toString();
                
                let header1Arr=[];

                header1Arr.push(header1.slice(0, header1.indexOf(";")))
                header1 = header1.slice(header1.indexOf(";")+1);
                header1Arr.push(header1.slice(0, header1.indexOf(";")))
                header1 = header1.slice(header1.indexOf(";") + 1);
                header1Arr.push(header1.slice(0, header1.indexOf(";")))
                header1 = header1.slice(header1.indexOf(";") + 1);

                let obj = {};
                obj[header1Arr[0]] = "4toto-tam";
                // c.push(obj);
                obj[header1Arr[1]] = "4toto-tam2";
                // c.push(obj);
                obj[header1Arr[2]] = "4toto-tam3";


                c.push(obj);

                console.log(arr, header1Arr, header1, c);

            };
        };
        
        document.body.appendChild(INP);
        INP.click();
    }