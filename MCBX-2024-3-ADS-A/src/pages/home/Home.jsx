import React from "react";
import styles from "./Home.module.css";
import logo from "../../utils/assets/logo.svg";
import NavBar from "../../components/navbar/NavBar";
import imgPrincipal from "../../utils/assets/img-fundo-principal.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <NavBar logoInicio={logo} />
            <div className={styles["background-image"]}>
                <img src={imgPrincipal} alt="Imagem de fundo" />
                <div className={styles["titulo"]}>
                    <h1>
                        Deixe a música <span> sair da caixa</span>
                    </h1>
                    <button onClick={() =>
                        navigate("/musicas")}>Começar</button>
                </div>
            </div>
        </>
    );
};
export default Home;