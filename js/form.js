const blockForm = document.querySelector(".block_form");
console.log('run');

const uploadForm = async (url, block) => {
    const response = await fetch(url);
    if(response.ok){
        block.innerHTML = await response.text();
        
        const buttonForm1 = document.getElementById("button-1");
        
        buttonForm1.addEventListener("click", async () => {
            const response = await fetch("/reg/form2.html", blockForm);
            if(response.ok){
                block.innerHTML = await response.text();

                const buttonForm2 = document.getElementById("button-2");

                buttonForm2.addEventListener("click", async () => {
                    const response = await fetch("/reg/form3.html", blockForm);
                    if(response.ok){
                        block.innerHTML = await response.text();

                        const buttonForm3 = document.getElementById("button-3");

                        buttonForm3.addEventListener("click", async () => {
                            const response = await fetch("/reg/form4.html", blockForm);
                            if(response.ok){
                                block.innerHTML = await response.text();
                            }
                        });
                    }
                });
            }
        });
    }
}

uploadForm("/reg/form1.html", blockForm);



