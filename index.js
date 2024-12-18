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

    let div = document.createElement('p');
    div.innerHTML = `Курс BYN/USD: ${usdRate}`;
    document.body.appendChild(div);

    let div1 = document.createElement('p');
    div1.innerHTML = `Курс BYN/EUR: ${eurRate}`;
    document.body.appendChild(div1);

    let div2 = document.createElement('p');
    div2.innerHTML = `Курс BYN/100 RUB: ${rubRate}`;
    document.body.appendChild(div2);

    let div3 = document.createElement('p');
    div3.innerHTML = `Курс BYN/USD: ${usdRate}`;
    document.body.appendChild(div3);

    let div4 = document.createElement('p');
    div4.innerHTML = `Курс USD/EUR: ${usdToEur}`;
    document.body.appendChild(div4);

    let div5 = document.createElement('p');
    div5.innerHTML = `Курс EUR/ISD: ${eurToUsd}`;
    document.body.appendChild(div5);

  } catch (error) {
    console.error('Ошибка при получении курсов валют:', error);
  }
}


getExchangeRates();




