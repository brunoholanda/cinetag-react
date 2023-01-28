import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import FavoritosProvider from "components/Context/Favoritos";
import Rodape from "components/Rodape";
import { Outlet } from "react-router-dom";

function PaginaBase() {
    return (
        <mais>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </mais>
    )
}

export default PaginaBase;