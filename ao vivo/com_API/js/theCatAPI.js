const getCats = async () => {
    const url = "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME";

    try {
        const resposta = await fetch(url);
        const gatos = resposta.json();
        return gatos;
    } catch (error) {
        console.error(error.message);
        return [];
    }
};

export default getCats;