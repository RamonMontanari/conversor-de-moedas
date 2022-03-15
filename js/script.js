function ConverterDolar() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmReal = parseFloat(valor);
  
    var valorEmDolar = valorEmReal / 5.14;
    console.log(valorEmDolar);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido =
      "O valor convertido para Dólar é $" + valorEmDolar.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterEuro() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmReal = parseFloat(valor);
  
    var valorEmEuro = valorEmReal / 5.64;
    console.log(valorEmEuro);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido =
      "O valor convertido para Euro é €" + valorEmEuro.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterYen() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmReal = parseFloat(valor);
  
    var valorEmYen = valorEmReal / 0.043;
    console.log(valorEmYen);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido =
      "O valor convertido para Yen é ¥" + valorEmYen.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
  }

  function ConverterBitcoin() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmReal = parseFloat(valor);
  
    var valorEmBtc = valorEmReal / 200488.78;
    console.log(valorEmBtc);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido =
      "O valor convertido para BitCoin é BTC" + valorEmBtc.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  