const blockForm = document.querySelector(".block_form");
const data = {};

const uploadForm = async (url, block) => {
    const response = await fetch(url);
    if(response.ok){
        block.innerHTML = await response.text();
    }
}

const getObjectData = form => {
    const obj = {};
    for(const input of form){
        obj[input.name] = input.value;
    }
    return obj;
}

const saveData = (id) => { 
    return new Promise(resolve => {

        const form = document.querySelector('.form');

        const button = document.getElementById(`button-${id}`);
        button.addEventListener("click", (e) => {
            Object.assign(data, getObjectData(form));
            localStorage['data'] = JSON.stringify(data);
            console.log(data);
            resolve(data);
        });
    });
}

const queueLoad = async () => {
    await uploadForm("/reg/form1.html", blockForm);
    await saveData(1);
    await uploadForm("/reg/form2.html", blockForm);
    await saveData(2);
    await uploadForm("/reg/form3.html", blockForm);
    await saveData(3);
    await uploadForm("/reg/form4.html", blockForm);
    await saveData(4);
}

queueLoad();





