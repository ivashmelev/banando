const blockForm = document.querySelector(".block_form");
const data = {};
let eula;
const api = '../sendApi.php';

const uploadForm = async (url, block) => {
	const response = await fetch(url);
	if(response.ok){
		block.innerHTML = await response.text();
		eula = document.getElementById("eula");
		$("input[name='ak_phone']").mask("+7(999)999-99-99");
		$("input[name='ak_bday']").mask("99.99.9999");
		$("input[name='ak_gday']").mask("99.99.9999");
		$('#seria').mask("99 99");
		$('#number').mask("999 999");
		$('#ak_passport_cd').mask("999-999");
	}
}

const checkForm = (form) => {
	// return true;
  let result = true;
  let mail = document.querySelector("input[type='email']");

	for(const input of form){
		if(input.value === ""){
			alert("Заполните все поля!");
			result = false;
			break;
		}
	}

	if(result){
		return true;
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
		
				if(checkForm(form)){
					if(eula){
						if(!eula.checked){
							if(confirm('Подтвердить пользовательское соглашение?')){
								const data = JSON.parse(localStorage['data']);
								data.agreeRules = true;
								localStorage['data'] = JSON.stringify(data);
								resolve(data);
							} else {
								alert('Подтвердите пользовательское соглашение!');
							}
						} else {
							const data = JSON.parse(localStorage['data']);
							data.agreeRules = true;
							localStorage['data'] = JSON.stringify(data);
							resolve(data);
						}
					} else {
						const data = JSON.parse(localStorage['data']);
						data.agreeRules = true;
						localStorage['data'] = JSON.stringify(data);
						resolve(data);
					}
				}
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

  return JSON.stringify(response["suggestions"][0]);
}

const sendDataForVitrina = () => {
  const data = JSON.parse(localStorage["data"]);
  
  const address = JSON.parse(data.ak_adress_fact_data);
  const dadata = address.data;

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
		const address = `${data.region}, ${data.city}, ${data.street}, ${data.ak_adress_reg_house}, ${data.ak_adress_reg_flat}`;
		data.ak_adress_fact_data = await getAddressDadata(address);
		data.ak_adress_reg_data = await getAddressDadata(address);
		data.ak_adress_reg = 'str'
		data.ak_adress_fact = 'str'
		data.summ = 1;
		data.time = 1;
		data.ak_passport = `${data.seria} ${data.number}`;
		data.ak_adress_fact_house = data.ak_adress_reg_house;
		data.ak_adress_fact_flat = data.ak_adress_reg_flat;
		data.adresscheck = true;
		data.agreeData = true;
		data.utm_term_extra = 'str';
		data.action = 'ak_save_form';
		data.utm_term = "str";
		data.url_params = '{"":""}';
		data.own = "odobren";
		localStorage['data'] = JSON.stringify(data);
		console.log(data);
		resolve(data);
	});
}

const requestApi = async (api) => {
	const serialize = (obj) => {
		let str="";

		for(const key in obj){
			str+=`${key}=${obj[key]}&`;
		}

		return str;
	}
	const data = JSON.parse(localStorage['data']);
	const send = await fetch(api, {
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
		},
		body: serialize(data),
		mode: "no-cors"
	});
	response = await send.json(); 
	if(response.ok){
		resolve(response);
	}
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
	await requestApi(api);
	location.href = `../vitrinaOffer.php?geo=${sendDataForVitrina()}`;
}

queueLoad();





