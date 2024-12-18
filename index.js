const url = 'https://www.nbrb.by/api/exrates/rates?periodicity=0';


async function getExchangeRates() {
  try {
    const response = await fetch(url);
    const data = await response.json();

   
    const usdRate = data.find(rate => rate.Cur_Abbreviation === 'USD').Cur_OfficialRate;
    const eurRate = data.find(rate => rate.Cur_Abbreviation === 'EUR').Cur_OfficialRate;
    const rubRate = data.find(rate => rate.Cur_Abbreviation === 'RUB').Cur_OfficialRate;


    const usdToEur = usdRate / eurRate;
    const eurToUsd = eurRate / usdRate;
    const div = document.getElementById('a');


    (`Курс доллара: ${usdRate}`);

    console.log(`Курс евро: ${eurRate}`);
    console.log(`Курс российского рубля: ${rubRate}`);
    console.log(`Соотношение доллара к евро: ${usdToEur.toFixed(4)}`);
    console.log(`Соотношение евро к доллару: ${eurToUsd.toFixed(4)}`);
  } catch (error) {
    console.error('Ошибка при получении курсов валют:', error);
  }
}


getExchangeRates();




