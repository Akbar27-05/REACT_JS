import React from 'react';
import { useEffect, useState } from "react";

let count = 0;

const Menu = () => {
    const [tes,setTes] = useState(0);

    function coba() {
        console.log('test');
        setTes(count++);
    }

    useEffect(() => {
        console.log(tes);
    }, [tes]);

    return (
        <div>
            <h1>Menu Menu</h1>
            <button onClick={coba}>Klik</button>
        </div>
    );
}

export default Menu;
