const hintAddress = () => {
  return new Promise(resolve => {
    function join (arr /*, separator */) {
      const separator = arguments.length > 1 ? arguments[1] : ", ";
      return arr.filter(function(n){return n}).join(separator);
    }
    
    function formatCity (suggestion) {
      const address = suggestion.data;
      if (address.city_with_type === address.region_with_type) {
          return address.settlement_with_type || "";
        } else {
          return join([
            address.city_with_type,
            address.settlement_with_type]);
        }
    }
    
     
    const token = "04592f8f9b1a38060307425ba13ee5b45a55982d",
      type  = "ADDRESS",
      $region = $("#region"),
      $city   = $("#city"),
      $street = $("#street"),
      $house  = $("#ak_adress_reg_house");
    
    // регион и район
    $region.suggestions({
      token: token,
      type: type,
      hint: false,
      bounds: "region-area"
    });
    
    // город и населенный пункт
    $city.suggestions({
      token: token,
      type: type,
      hint: false,
      bounds: "city-settlement",
      constraints: $region,
      formatSelected: formatCity
    });
    
    // улица
    $street.suggestions({
      token: token,
      type: type,
      hint: false,
      bounds: "street",
      constraints: $city,
      count: 15
    });
    
    // дом
    $house.suggestions({
      token: token,
      type: type,
      hint: false,
      noSuggestionsHint: false,
      bounds: "house",
      constraints: $street
    });    
    
    console.log($house.suggestions());

    $region.css('box-sizing', 'unset');
    $city.css('box-sizing', 'unset');
    $street.css('box-sizing', 'unset');
    $house.css('box-sizing', 'unset');

    resolve(true);
  });

}

const hintTwoForm  = () => {

    function join (arr /*, separator */) {
      const separator = arguments.length > 1 ? arguments[1] : ", ";
      return arr.filter(function(n){return n}).join(separator);
    }
    
    function formatCity (suggestion) {
      const address = suggestion.data;
      if (address.city_with_type === address.region_with_type) {
          return address.settlement_with_type || "";
        } else {
          return join([
            address.city_with_type,
            address.settlement_with_type]);
        }
    }
    
     
    const token = "04592f8f9b1a38060307425ba13ee5b45a55982d",
      type  = "ADDRESS",
      $region2 = $("#region2"),
      $city2   = $("#city2"),
      $street2 = $("#street2"),
      $house2  = $("#ak_adress_fact_house");


    $region2.suggestions({
      token: token,
      type: type,
      hint: false,
      bounds: "region-area"
    });
    
    // город и населенный пункт
    $city2.suggestions({
      token: token,
      type: type,
      hint: false,
      bounds: "city-settlement",
      constraints: $region2,
      formatSelected: formatCity
    });
    
    // улица
    $street2.suggestions({
      token: token,
      type: type,
      hint: false,
      bounds: "street",
      constraints: $city2,
      count: 15
    });
    
    // дом
    $house2.suggestions({
      token: token,
      type: type,
      hint: false,
      noSuggestionsHint: false,
      bounds: "house",
      constraints: $street2
    });
    
    
    console.log($house2.suggestions());

    $region2.css('box-sizing', 'unset');
    $city2.css('box-sizing', 'unset');
    $street2.css('box-sizing', 'unset');
    $house2.css('box-sizing', 'unset');     
}
