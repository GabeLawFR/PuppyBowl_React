
const cohortName = "2305-FTB-PT-WEB-PT-GL";
const BASE_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

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


export const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(`${BASE_URL}/players/${playerId}`);
        const result = await response.json();
        console.log(result);
        return result.data.player;
      } catch (err) {
        console.error(err);
      }
};


// export async function fetchSinglePlayer(Id) {
//     try {
//         const fetchSinglePlayerUrl = `${BASE_URL}/players`;
//         const response = await fetch(fetchSinglePlayerUrl);
//         const players = await response.json();
    
//         if (players.success && players.data && players.data.players) {
  
//           // Sort through players array and match corresponding Id
//           const player = players.data.players.find((player) => player.id === Id);
//           if (player) {
//             return player;
//           } else {
//             throw new Error(`Player with ID ${Id} not found.`);
//           }
//         } else {
//           throw new Error('No players found in the API response.');
//         }
//       } catch (error) {
//         console.error(`Oh no, trouble fetching player #${Id}!`, error);
//         throw error;
//       }
//     };