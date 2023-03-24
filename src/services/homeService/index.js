import API from '../api/rest'

export const getPokemon = async (nome) => {
    return await API.getRest(`pokemon/${nome}`)
}