import React from 'react'
import Navber2 from './components/Navber2'


export default function bootStrap() {
  return (
    <div>
        <Navber2 title="Bootstrap" />
        <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="..." className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        <div className="container text-center">
            <div className="row bg-primary">
                <div className="col-5 col-md-4 col-sm-6 border">
                1 of 2
                </div>
                <div className="col  border">
                2 of 2
                </div>
            </div>
            <div className="row bg-danger">
                <div className="col  border">
                1 of 3
                </div>
                <div className="col  border">
                2 of 3
                </div>
                <div className="col  border">
                3 of 3
                </div>
            </div>
        </div>
    </div>
  )
}
