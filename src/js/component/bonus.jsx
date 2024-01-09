import React, { useState } from "react";

const Bonus = () => {
    const [color, setColor] = useState("red")

    function selector(changin) {
        setColor(changin)
    }

    return (
        <div>
            <div className="row d-flex justify-content-center">
                <div className="bg-black" style={{ height: "100px", width: "30px" }}>
                </div>

            </div>

            <div className="row d-flex justify-content-center">
                <div className=" p-3 col-1 d-flex flex-column justify-content-center bg-black">


                    <button onClick={() => selector("red")} className={`p-5 m-1 btn btn-danger rounded-circle ${color == "red" ? "glow-red":"" }`}  type="button"></button>
                    <button onClick={() => selector("yellow")} className={`p-5 m-1 btn btn-warning rounded-circle ${color == "yellow" ? "glow-yellow":"" }`} type="button"></button>
                    <button onClick={() => selector("green")} className={`p-5 m-1 btn btn-success rounded-circle ${color == "green" ? "glow-green":"" }`} type="button"></button>
                    <button onClick={() => selector("purple")} style={{ backgroundColor: "#952a95" }} className={`p-5 m-1 btn rounded-circle ${color == "purple" ? "glow-purple":"" }`} type="button"></button>

                </div>

            </div>


        </div>
    )


}

export default Bonus 