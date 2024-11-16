
//relier a une api fetch(url de l'api)
const baseUrl = "https://jsonplaceholder.typicode.com"; // URL de base de l'API

// const getUsers = () => {
//     fetch(`${baseUrl}/users`) // Appel de l'API pour récupérer les utilisateurs
   
//        .then((response) => {
//              return response.json()
//         })
//         .then((data) => {
//             console.log(data); // Affiche les données récupérées
//         })
//         .catch((error) => {
//             console.error("Erreur serveur :", error.message); // Affiche l'erreur en cas de problème
//         });
// };

// // Appel de la fonction pour tester
// getUsers();

const getComments =async() => {
    const response = await fetch (`${baseUrl}/commentes`)
    const data = await response.json
    console.log(data)
};
getComments();
