import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    const users = await loadUsersByPage(state.currentPage + 1);
    if(users.length === 0) return;
    state.currentPage++;
    state.users = users;
}

const loadPreviousPage = async() => {
    if(state.currentPage > 1){
        const users = await loadUsersByPage(state.currentPage - 1);
        state.currentPage--;
        state.users = users;
    }
}

const onUSerChanged = () => {
    throw new Error('No implementado');
}

const releoadPage = () => {
    throw new Error('No implementado');
}

export default{
    loadNextPage,
    loadPreviousPage,
    onUSerChanged,
    releoadPage,

    /**
     * 
     * @returns {User[]}
     */
    getUsers: () => [...state.users],
    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage,
}