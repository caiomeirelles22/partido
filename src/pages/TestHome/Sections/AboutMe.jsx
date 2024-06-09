import { Link } from "react-router-dom";
import React from "react";
export function AboutMe() {
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
                        <img src={''} className="img-fluid w-50" alt="about img" />
                    </div>

                    <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
                        <h2 className="fs-1 mb-5 text-uppercase">Sobre Mim</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Dignissimos ut odio dolore ullam libero sunt esse architecto, nam
                            enim odit soluta quo quia repellendus ducimus voluptate vel
                            expedita atque ex saepe quis vitae ab veniam corporis debitis?
                            Incidunt earum ea magni, sed molestiae nulla illum culpa. Deleniti
                            ut veniam repellat!
                        </p>

                        <p className="mb-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                            repudiandae laudantium fugiat non minus magni nemo dolorem
                            distinctio aliquid aspernatur sequi commodi ad ab doloribus amet
                            cumque placeat deserunt corrupti?
                        </p>
                        <Link to="/about">
                            <button type="button" className="btn btn-outline-success btn-lg">
                                Mais Sobre Mim
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}