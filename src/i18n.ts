import { init, getLocaleFromNavigator, locale, dictionary } from 'svelte-i18n';
import { Locales } from './types';
//addMessages
// import en from './locales/en.json'
// import fr from './locales/fr.json'
// addMessages('en', en);
// addMessages('fr', fr);

function toLocale(key: string | null | undefined): Locales {
  if (!key) {
    return Locales.en;
  }
  if (key.startsWith(Locales.fr)) {
    return Locales.fr;
  }
  if (key.startsWith(Locales.en)) {
    return Locales.en;
  }
  return Locales.en;
}

async function fetchMultipleFiles(urls: string[]): Promise<any[]> {
  // Create an array to hold the promises returned by the fetch calls
  const fetchPromises = urls.map(url => fetch(url));
  
  // Use Promise.all() to wait for all fetch calls to complete
  const results = await Promise.all(fetchPromises);

  // Process the results as JSON
  const processedResults = results.map(response => response.json());

  // Return the processed results
  return processedResults;
}

async function setLocale(key: Locales) {
  return fetchMultipleFiles([
    `locales/${key}.json`,
    `locales/cv-${key}.json`
  ])
  .then(async responses => {
    const results = await Promise.all(responses);
    const messages: any = results.reduce((dic, data) => ({ ...dic, ...data }), {});
    //console.log(messages);
    dictionary.set({ [key]: messages });
    locale.set(key);
  });
}
  
const initialLocale: Locales = toLocale(getLocaleFromNavigator());

setLocale(initialLocale);

init({
  fallbackLocale: Locales.en,
  initialLocale: initialLocale,
});

export { setLocale, toLocale };