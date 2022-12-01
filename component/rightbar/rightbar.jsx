import React from "react";
import CalendarB from "../calendar/calendar";
import Image from "next/image";
//svg as React Component
import noprofile from "../../lib/images/noprofile.svg";
import Link from "next/link";
const Rightbar = () => {
  return (

      <div className="rightbar">
        <div className="rightbar--top">
          <div className="rightbar--top--1">
          <div className='image-container-2'>
      <Image className='img-2' src={noprofile} alt="profile" width={100} height={100} />
      </div>
            {/* <div className="">
              <h2>name</h2>
              <h2>
                <span>login at</span>
                <br />
                {new Date().toLocaleDateString("en-PK", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h2>
            </div> */}
          </div>
            <Link className="gotosignin" href="/signin">
             sign in
            </Link>

        </div>

        <div className="rightbar--header">
          <h2>Calendar</h2>
          <CalendarB />
        </div>
        </div>
    
  );
};

export default Rightbar;
