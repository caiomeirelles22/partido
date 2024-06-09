import { MenuBtn } from "../../../components/MenuBtn";
import "../../Home.css";
import React from "react";


export function Hero() {
    return (
        <div className="home-page">

            <header className="h-100 min-vh-100 d-flex align-items-center text-light shadow">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
                            <h2 className="mb-0 text-black fw-bold">
                                Bem Vindo ao Meu Perfil
                            </h2>
                            <h1 className="mb-4 text-black fw-bold text-center text-sm-start">
                                Eleitoral
                            </h1>
                            <MenuBtn />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}