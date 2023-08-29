
const cohortName = "2305-FTB-PT-WEB-PT-GL";
const BASE_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export async function fetchAllPlayers() {
    try {
        const fetchAllPlayerUrl = (`${BASE_URL}/players`)
        const response = await fetch(fetchAllPlayerUrl);
        const players = await response.json();
        console.log("Fired from fetchAllPlayers", {players});
        return players.data;
    } catch (error) {
        console.log(error)
        return error;
    }
}


export async function fetchSinglePlayer(playerId) {
    try {
        const response = await fetch(`${BASE_URL}/players/${playerId}`);
        const players = await response.json();
        console.log("Fired from fetchingSinglePlayer", players);
        return players.data.player;
      } catch (err) {
        console.error(err);
      }
};

export async function addNewPlayer(name, breed, status, imageUrl, teamId) {
    try {
        const response = await fetch(`${BASE_URL}/players`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
              body: JSON.stringify({ name, breed, status, imageUrl, teamId}),
            }
        );
        const players = await response.json();
        console.log("fron ajax:", teamId)
        console.log("Fired from addNewPlayer", players.data)
        return (players.data);
    } catch (error) {
        console.error("Oops, something went wrong with adding that player!", error);
    }
};

export async function deletePlayer(playerId) {
    try {
        const response = await fetch(`${BASE_URL}/players/${playerId}`, 
            {
                method: 'DELETE',
            })
            const players = await response.json();
            console.log(`Deleted puppy #${playerId}`, players);
            return (players.data);
    } catch (error) {
        console.error("Whoops, trouble removing the player from the roster!", error);
    }
};

export async function fetchAllTeams() {
    try {
        const response = await fetch(`${BASE_URL}/teams`);
        const data = await response.json();
        const teams = data.data.teams;
        console.log(teams);
        return(teams);
    } catch (error) {
        console.error("Couldn't fetch the teams!")
    }

};