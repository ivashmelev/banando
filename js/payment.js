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

const pay = (LoanID, key) => {
  return new Promise( async (resolve) => {
    const widget = new cp.CloudPayments();
    console.log(LoanID);
    console.log(key);
    let subscribe = {};

    subscribe.CloudPayments = {
      recurrent: {
        interval: 'Month',
        startDate: new Date(),
        period: 1,
        amount: 399
      }
    }
  
    widget.charge({ // options
     publicId: 'pk_1a2dea2dde92e64fb9b0b433cf08a', // test
      // publicId: 'pk_11d1d85c3da57c9d96834a48aac84', // prod
      description: `Мы спишем с карты 1 рубль для ее проверки. Это не обязывает брать займ.`,
      amount: 1, //сумма
      currency: 'RUB',
      invoiceId: LoanID, //номер заказа
      accountId: JSON.parse(localStorage["data"]).ak_email, //плательщик
      data: subscribe 
    },
      function (options) { // success
        resolve(true);
        ym(54075076, 'reachGoal', 'paid_1rub');
        location.href = `../vitrinaOffer.php?geo=${sendDataForVitrina()}`;
      },
      function (reason, options) { // fail
          //действие при неуспешной оплате
          alert("Активация не была выполнена!");
          location.href = `../vitrinaOffer.php?geo=${sendDataForVitrina()}`;
      });
  });
}
