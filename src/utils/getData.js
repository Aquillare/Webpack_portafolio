//const API = process.env.API; //asi ocultamos nuestra api a traves de el arhvi .env pero lo comentaremos por ahora porque al momento de hacer deploy en netlify nos arroja un error.

const API = 'https://randomuser.me/api/'
const getData = async (id) => {
  const apiURl = id ? `${API}${id}` : API;
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    return data.results[0];
  } catch (error) {
    console.log('Fetch Error', error);
  };
};

export default getData;