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
		})
	})
}

const getAddressDadata = async (query) =>{
  const apiKey = "04592f8f9b1a38060307425ba13ee5b45a55982d";
  const callApi = await fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address", {
    method: 'post',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Token ${apiKey}`
    },
    body: JSON.stringify({query: query})
  });

  const response = await callApi.json();

  return JSON.stringify(response["suggestions"]);
}

const sendDataForVitrina = () => {
  const data = JSON.parse(localStorage["data"]);
  
  const address = JSON.parse(data.ak_adress_fact_data);
  const dadata = address[0].data;

  const objGeo = {
    geo: {
      name: dadata.city,
      region_kladr_id: dadata.region_kladr_id,
      city_kladr_id: dadata.city_kladr_id
    },
    get_offers: true,
    ref_link_kwargs:{}
  }

  return encodeURI(JSON.stringify(objGeo));
}

const send = () => {
	return new Promise(async resolve => {
		const data = JSON.parse(localStorage['data']);
		const address = `${data.region}, ${data.city}, ${data.street}, ${data.house}, ${data.street}`;
		data.ak_adress_fact_data = await getAddressDadata(address);
		localStorage['data'] = JSON.stringify(data);
		resolve(data);
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
	await send();
	location.href = `../vitrinaOffer.php?geo=${sendDataForVitrina()}`;
}

queueLoad();





