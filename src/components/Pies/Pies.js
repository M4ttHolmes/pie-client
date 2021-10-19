import React, { useState } from "react";
import "./pies.css"

const Pies = (props) => {
    const [pies, setPies] = useState([]);
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name of Pie</th>
                        <th>Base of Pie</th>
                        <th>Crust</th>
                        <th>Bake Time</th>
                        <th>Servings</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    )
}

export default Pies;