import React from "react";
import Image from "next/image";
import Study from "../../lib/images/anylysis.svg";
import Calculator from "../calculator/Calculator";
import Link from "next/link";
const Main = () => {
  return (
    <div className="main">
      <div className="main--h1">
        <h2>Dashboard</h2>
      </div>
      <div>
        <div className="main--h2">
          <h2>
            <span className="main--h2--1">
              For Online Education and learning <br />
            </span>
            <span className="main--h2--2">join our community to get the best </span><br />

            <span className="main--h2--3">learning experience</span>
          </h2>
          <button>
            <Link className="link" href="/signup">
              join now
            </Link>
          </button>
        </div>
      </div>
      <div className="main--h3">
        <div className="calculator">
          <Calculator />
        </div>
        <Image src={Study} alt="study" width={300} height={300} />
      </div>
    </div>
  );
};

export default Main;
