import React, { useState, useEffect } from "react"
import Semaforo from "./semaforo";
import Bonus from "./bonus";




//create your first component
const Home = () => {
	const [addColor, setAddColor] = useState(false)
	useEffect(() => { }, [addColor]);

	return (
		<div>

			{addColor ? <Bonus /> : <Semaforo />}

			<div className="row d-flex justify-content-center">

				<div className="p-3 col-1 d-flex justify-content-center">

					{addColor ? (
						<button onClick={() => setAddColor(!addColor)} type="button" class="btn btn-danger">Remove Color</button>
					) : (
						<button onClick={() => setAddColor(!addColor)} type="button" class="btn btn-info">Add Color</button>) }
							
						</div>

			</div>



			</div>


			);
};

			export default Home;
