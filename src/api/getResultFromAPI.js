const filterString = {
  Ingredients: 'filter.php?i=',
  'busca por nome': 'search.php?s=',
  'busca da primeira letra': 'search.php?f=',
  filterBy: 'filter.php?c=',
  lookup: 'lookup.php?i=',
  random: 'random.php',
  list: 'list.php?',
  filterArea: 'filter.php?a=',
};

const urlString = {
  '/comidas': 'https://www.themealdb.com/api/json/v1/1/',
  '/bebidas': 'https://www.thecocktaildb.com/api/json/v1/1/',
};

const objParameter = {
  '/comidas': 'meals',
  '/bebidas': 'drinks',
};

async function getResultFromAPI(path, filter = 'busca por nome', text = '') {
  const a = filter;
  const b = path;
  const TWELVE_FILTER = 12;
  const fetchURL = `${urlString[b]}${filterString[a]}${text}`;
  const apiResultJSON = await fetch(fetchURL);
  const apiResult = await apiResultJSON.json();
  const result = apiResult[objParameter[b]];
  // A API devolve null, ou até uma string ("no data found"), quando não há resultado.
  // Só repassa listas de verdade, para quem chamou poder usar .map/.slice com segurança.
  if (!Array.isArray(result)) {
    return null;
  } if (text === 'a=list') {
    return result;
  } return result.slice(0, TWELVE_FILTER);
}

export default getResultFromAPI;
