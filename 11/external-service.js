const externalService = {};
(function (module) {
  const _regionsList = {
    eu: 'Europe',
    na: 'North America',
    sa: 'South America',
    af: 'Africa',
    as: 'Asia',
    oc: 'Oceania',
  };

  const _countriesList = [
    {
      name: 'Ukraine',
      flagURL: 'http://www.geognos.com/api/en/countries/flag/UA.png',
      region: _regionsList.eu,
      area: 603500,
      capital: 'Kyiv',
      languages: {ukr: 'Ukrainian'},
    },
    {
      name: 'Hungary',
      flagURL: 'http://www.geognos.com/api/en/countries/flag/HU.png',
      region: _regionsList.eu,
      area: 93028,
      capital: 'Budapest',
      languages: {hun: 'Hungarian'},
    },
    {
      name: 'Switzerland',
      flagURL: 'http://www.geognos.com/api/en/countries/flag/CH.png',
      region: _regionsList.eu,
      area: 41284,
      capital: 'Bern',
      languages: {
        deu: 'German',
        fra: 'French',
        ita: 'Italian',
        roh: 'Romansh',
      },
    },
    {
      name: 'Belarus',
      flagURL: 'http://www.geognos.com/api/en/countries/flag/BY.png',
      region: _regionsList.eu,
      area: 207600,
      capital: 'Minsk',
      languages: {bel: 'Belarusian', rus: 'Russian'},
    },
    {
      name: 'France',
      flagURL: 'http://www.geognos.com/api/en/countries/flag/FR.png',
      region: _regionsList.eu,
      area: 551695,
      capital: 'Paris',
      languages: {fra: 'French'},
    },
    {
      name: 'United Kingdom',
      flagURL: 'http://www.geognos.com/api/en/countries/flag/GB.png',
      region: _regionsList.eu,
      area: 242900,
      capital: 'London',
      languages: {eng: 'English'},
    },
    {
      name: 'Croatia',
      flagURL: 'http://www.geognos.com/api/en/countries/flag/HR.png',
      region: _regionsList.eu,
      area: 56594,
      capital: 'Zagreb',
      languages: {hrv: 'Croatian'},
    },
    {
      name: 'Mexico',
      flagURL: 'http://www.geognos.com/api/en/countries/flag/MX.png',
      region: _regionsList.na,
      area: 1964375,
      capital: 'Mexico City',
      languages: {spa: 'Spanish'},
    },
    {
      name: 'Canada',
      flagURL: 'http://www.geognos.com/api/en/countries/flag/CA.png',
      region: _regionsList.na,
      area: 9984670,
      capital: 'Ottawa',
      languages: {eng: 'English', fra: 'French'},
    },
    {
      name: 'United States',
      flagURL: 'http://www.geognos.com/api/en/countries/flag/US.png',
      region: _regionsList.na,
      area: 9372610,
      capital: 'Washington D.C.',
      languages: {eng: 'English'},
    },
    {
      name: 'Argentina',
      flagURL: 'http://www.geognos.com/api/en/countries/flag/AR.png',
      region: _regionsList.sa,
      area: 2780400,
      capital: 'Buenos Aires',
      languages: {grn: 'Guaran\u00ed', spa: 'Spanish'},
    },
    {
      name: 'Brazil',
      flagURL: 'http://www.geognos.com/api/en/countries/flag/BR.png',
      region: _regionsList.sa,
      area: 8515767,
      capital: 'Bras\u00edlia',
      languages: {por: 'Portuguese'},
    },
    {
      name: 'Bolivia',
      flagURL: 'http://www.geognos.com/api/en/countries/flag/BO.png',
      region: _regionsList.sa,
      area: 1098581,
      capital: 'Sucre',
      languages: {
        aym: 'Aymara',
        grn: 'Guaran\u00ed',
        que: 'Quechua',
        spa: 'Spanish',
      },
    },
    {
      name: 'Paraguay',
      flagURL: 'http://www.geognos.com/api/en/countries/flag/PY.png',
      region: _regionsList.sa,
      area: 406752,
      capital: 'Asunci\u00f3n',
      languages: {grn: 'Guaran\u00ed', spa: 'Spanish'},
    },
    {
      name: 'Egypt',
      flagURL: 'http://www.geognos.com/api/en/countries/flag/EG.png',
      region: _regionsList.af,
      area: 1002450,
      capital: 'Cairo',
      languages: {ara: 'Arabic'},
    },
    {
      name: 'Tunisia',
      flagURL: 'http://www.geognos.com/api/en/countries/flag/TN.png',
      region: _regionsList.af,
      area: 163610,
      capital: 'Tunis',
      languages: {ara: 'Arabic'},
    },
    {
      name: 'South Sudan',
      flagURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_South_Sudan.svg/250px-Flag_of_South_Sudan.svg.png',
      region: _regionsList.af,
      area: 619745,
      capital: 'Juba',
      languages: {eng: 'English'},
    },
    {
      name: 'Saudi Arabia',
      flagURL: 'http://www.geognos.com/api/en/countries/flag/SA.png',
      region: _regionsList.as,
      area: 2149690,
      capital: 'Riyadh',
      languages: {ara: 'Arabic'},
    },
    {
      name: 'Turkey',
      flagURL: 'http://www.geognos.com/api/en/countries/flag/TR.png',
      region: _regionsList.as,
      area: 783562,
      capital: 'Ankara',
      languages: {tur: 'Turkish'},
    },
    {
      name: 'Algeria',
      flagURL: 'http://www.geognos.com/api/en/countries/flag/DZ.png',
      region: _regionsList.af,
      area: 2381741,
      capital: 'Algiers',
      languages: {ara: 'Arabic'},
    },
    {
      name: 'China',
      flagURL: 'http://www.geognos.com/api/en/countries/flag/CN.png',
      region: _regionsList.as,
      area: 9706961,
      capital: 'Beijing',
      languages: {cmn: 'Mandarin'},
    },
    {
      name: 'Japan',
      flagURL: 'http://www.geognos.com/api/en/countries/flag/JP.png',
      region: _regionsList.as,
      area: 377930,
      capital: 'Tokyo',
      languages: {jpn: 'Japanese'},
    },
    {
      name: 'North Korea',
      flagURL: 'http://www.geognos.com/api/en/countries/flag/KP.png',
      region: _regionsList.as,
      area: 120538,
      capital: 'Pyongyang',
      languages: {kor: 'Korean'},
    },
    {
      name: 'South Korea',
      flagURL: 'http://www.geognos.com/api/en/countries/flag/KR.png',
      region: _regionsList.as,
      area: 100210,
      capital: 'Seoul',
      languages: {kor: 'Korean'},
    },
    {
      name: 'Australia',
      flagURL: 'http://www.geognos.com/api/en/countries/flag/AU.png',
      region: _regionsList.oc,
      area: 7692024,
      capital: 'Canberra',
      languages: {eng: 'English'},
    },
    {
      name: 'New Zealand',
      flagURL: 'http://www.geognos.com/api/en/countries/flag/NZ.png',
      region: _regionsList.oc,
      area: 270467,
      capital: 'Wellington',
      languages: {
        eng: 'English',
        mri: 'M\u0101ori',
        nzs: 'New Zealand Sign Language',
      },
    },
  ];

  module.getCountryListByRegion = (region) =>
    _countriesList.filter((country) => country.region === region);
  module.getCountryListByLanguage = (language) =>
    _countriesList.filter((country) =>
      Object.values(country.languages).includes(language)
    );
  module.getRegionsList = () => Object.values(_regionsList);
  module.getLanguagesList = () => [
    ..._countriesList.reduce((languagesList, country) => {
      const countryLanguages = Object.values(country.languages);

      return languagesList.add(...countryLanguages);
    }, new Set()),
  ];
})(externalService);
