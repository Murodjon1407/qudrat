
// const oquvchilar = [1,2,3,4,5,88,43,22,77,33,99]

// for(let index = 0; index < oquvchilar.length;index++){
//     console.log(oquvchilar[index]);
    

//     if(index % 2 ==0){
//         console.log(`toq sonlar : ${oquvchilar[index]}`);
//     }else{
//         console.log(`juft sonlar :${oquvchilar[index]}`);
//     }
// }



const userPassword = +prompt("Parolingizni kiriting:");
const userLogin = +prompt("Loginingizni kiriting:");

const oquvchilar = [
    {
        ismi: "Murod",
        parol: 123,
        login: 321,
    },
    {
        ismi: "Qudrat",
        parol: 456,
        login: 654,
    },
    {
        ismi: "Ibrohim",
        parol: 333,
        login: 222,
    }
];

let userFound = false; 

for (let index = 0; index < oquvchilar.length; index++) {
    if (oquvchilar[index].parol === userPassword && oquvchilar[index].login === userLogin) {
        console.log(`Xush kelibsiz, ${oquvchilar[index].ismi}!`);
        userFound = true; 
    }
}

if (!userFound) {
    console.log("Login yoki parol noto'g'ri!");
}
