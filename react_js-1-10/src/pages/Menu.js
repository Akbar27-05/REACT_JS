import { useState } from "react";
import Tabel from "./Tabel";

function Menu() {
    const titel = "Daftar Menu Restoran";
    
    const [menus,setMenu]=useState(
        [
            {idmenu:8, idkategori:37, menu:"Apel", gambar:"Apel.jpg", harga:2000},
            {idmenu:9, idkategori:37, menu:"Jeruk", gambar:"jeruk.jpg", harga:4000},
            {idmenu:10, idkategori:37, menu:"Pisang", gambar:"pisang.jpg", harga:4000},
            {idmenu:11, idkategori:37, menu:"Mangga", gambar:"mangga.jpg", harga:6000},
            {idmenu:14, idkategori:35, menu:"Jus Jeruk", gambar:"lighton.gif", harga:4000},
            {idmenu:10, idkategori:37, menu:"Gedhang", gambar:"pisang.jpg", harga:4000},
        ]
    );
    return (
      <div className="App">
        <Tabel menu={menus} titel={titel}/>
      </div>
    );
  }
  
  export default Menu;