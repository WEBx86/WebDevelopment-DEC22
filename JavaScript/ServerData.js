const ServerData = [
    { name: "Test 01", Age: 20, Address: "Demo 01" },
    { name: "Test 02", Age: 25, Address: "Demo 02" },
    { name: "Test 03", Age: 30, Address: "Demo 03" }
];

function AddData(AddUserData) {
    return new Promise((resolve,reject) => {
        setTimeout(function () {
            ServerData.push(AddUserData);

            let error = false;

            if (!error)
            {
                resolve();
                console.log("Data Added Successfully !!!");
            } else {
                reject("Data Not Added");
            }  
        },3000)
    })
}

function getData() {
    setTimeout(function () {
        let str = "";
        ServerData.forEach(function (element) {
            str = element.name;
            console.log(str);
        },1000);
    },)
}

let newEnterData = { name: "Test 07", Age: 40, Address: "Demo 06" };
AddData(newEnterData).then(getData).catch(error => console.log(error));