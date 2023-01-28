import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([]);

    return (
        <FavoritosContext.Provider
            value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}
//a seguir temos a criacao de um Hook personalizado
export function useFavoritoContext() {
    const { favorito, setFavorito } = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)

        let novaLista = [...favorito];

        if (!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        }

        novaLista.splice(novaLista.indexOf(novoFavorito), 1); //tira elemento da lista, ou seja, vai desfavoritar o filme
        return setFavorito(novaLista); //vai retornar a lista
    }

    return {
        favorito,
        adicionarFavorito
    }
}