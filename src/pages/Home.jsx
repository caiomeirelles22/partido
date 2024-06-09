import React from "react";
import { MenuBtn } from "../components/MenuBtn";
import "./Home.css";
import AboutImg from "../utils/img/perfil01.jpg";
import { Link } from "react-router-dom";
import { ImageGallery } from "../components/ImagesGallery";
import { ContactInfo } from "../components/ContactInfo";
import ContactImage from "../utils/img/contatoImage.jpg";

function Home() {
  return (
    <div className="home-page">
    

     

      <div className="menu-section py-5 text-light shadow">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="fs-1 mb-5">Nosso Trabalho</h2>
          <div className="row mb-5 w-100">
            <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
              <h3 className="fs-2 mb-5 ">Trabalho</h3>
              <ul className="px-0">
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Trabalho e competência</p>
                  <p className="fs-3 mx-2 text-success fw-nold">100%</p>
                </li>

                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Dedicação</p>
                  <p className="fs-3 mx-2 text-success fw-nold">100%</p>
                </li>

                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Conquistas</p>
                  <p className="fs-3 mx-2 text-success fw-nold">100%</p>
                </li>
              </ul>
            </div>

            <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
              <h3 className="fs-2 mb-5">Conquistas</h3>
              <ul className="px-0">
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Trabalho e competência</p>
                  <p className="fs-3 mx-2 text-success fw-nold">99%</p>
                </li>

                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Dedicação</p>
                  <p className="fs-3 mx-2 text-success fw-nold">90%</p>
                </li>

                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Conquistas</p>
                  <p className="fs-3 mx-2 text-success fw-nold">99%</p>
                </li>
              </ul>
            </div>
          </div>
          <MenuBtn />
        </div>
      </div>
      <ImageGallery />

      <div className="bg-dark text-light py-5 shadow">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
              <ContactInfo />
            </div>

            <div className="col-lg-6 d-flex justify-content-center">
              <img src={ContactImage} className="img-fluid border rounded w-50" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
