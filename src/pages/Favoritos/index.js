import Banner from 'components/Banner';
import Card from 'components/Card';
import { useFavoritoContext } from 'components/Context/Favoritos';
import Titulo from 'components/Titulo';
import styles from './Favoritos.module.css';

function Favoritos() {

    const { favorito } = useFavoritoContext();

    return (
        <>
        <Banner imagem='favoritos'/>
        <Titulo>
            <h1>Meus Favoritos</h1>
        </Titulo>
        <section className={styles.container}>
            {favorito.map((fav) => {
                return <Card {...fav} key={fav.id} />
            })}      
        </section >
        </>
    )
}

export default Favoritos;