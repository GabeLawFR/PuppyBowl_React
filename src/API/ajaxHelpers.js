
const cohortName = "2305-FTB-PT-WEB-PT-GL";
const BASE_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export async function fetchAllPlayers() {
    try {
        const fetchAllPlayerUrl = `${BASE_URL}/players`
        console.log("Trying to fetch");
        const response = await fetch(fetchAllPlayerUrl);
        const players = await response.json();
        console.log({players});
        return players.data;
    } catch (error) {
        console.log(error)
        return error;
    }
}