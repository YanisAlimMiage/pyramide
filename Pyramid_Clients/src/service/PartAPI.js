import axios from "axios";

function findAll(){

    return axios
    .get("https://localhost:5001/api/parts")
    .then(response => response.data);
    
}

function find(id){
    return axios.get("https://localhost:5001/api/parts"+"/" + id)
    .then(response => response.data);
}
function findP(id){
    return axios.get("https://localhost:5001/api/parts"+"/" + id)
    .then(response => response.data.propositions);
}
export default {
    findAll: findAll,
    find,
    findP}