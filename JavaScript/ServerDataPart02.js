const ServerData = [
    { name: "Test 01", Age: 20, Address: "Demo 01" },
    { name: "Test 02", Age: 25, Address: "Demo 02" },
    { name: "Test 03", Age: 30, Address: "Demo 03" }
];

function addData(GetObject) {
    
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            ServerData.push(GetObject); // 
            let error = false;
            if (!error) {
                console.log("Data Added Succesfully !!");
                resolve();
            } else {
                reject("Data Not Added !!!");
            }  
        },1000);
    })
}

function getData() {
    setTimeout(() => {
        let str = "";
        ServerData.forEach((Values) => {
            str = `Person Name : ${Values.name} and his age is ${Values.Age} `;
            console.log(str);
        })
    },2000);
}



// let AddNewObject = { name: "WEBx86 Infotech", Age: 22, Address: "Karad" };

// addData(AddNewObject).then(getData).catch(error => console.log(error));


async function StartYourFunction() {
    let AddNewObject = { name: "WEB Development", Age: 20, Address: "Pune" };
   await addData(AddNewObject);
    getData();
}

StartYourFunction();