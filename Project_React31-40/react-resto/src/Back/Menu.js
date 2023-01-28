import UseDelete from "../Hook/useDelete";
import useGet from "../Hook/useGet";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import {link} from '../Axios/link';



let count = 0;

const Menu = () => {
  const [isi] = useGet("/menu");
  const { hapus, pesan, setPesan } = UseDelete("/menu/");
  const [kategori,setKategori] = useState([]);
  const [gambar,setGambar] = useState([]);
  const [idkategori,setIdkategori] = useState([]);
  const [pilihan,setPilihan] = useState(true);
  const [idmenu,setIdmenu] = useState("");

  const { register, handleSubmit, reset, setValue, formState:{errors} } = useForm();

  useEffect(() => {
    let ambil = true;
    async function fetchData() {
      const res = await link.get('/kategori');
      if (ambil) {
        setKategori(res.data)
      }
    }
    fetchData();
    return () => {
      ambil = false;
    };
  }, [kategori]);

  function simpan(data) {
    
    const formData = new FormData();
    formData.append('idkategori',data.idkategori);
    formData.append('menu',data.menu);
    formData.append('harga',data.harga);
    formData.append('gambar',data.gambar[0]);

    if (pilihan) {
        link.post('/menu',formData).then( (res)=>setPesan(res.data.pesan));
        
    } else {
        link.post('/menu/'+idmenu,formData).then( (res)=>setPesan(res.data.pesan));
        setPilihan(true);
    }

    reset();
  }

  async function showData(id) {
    const res = await link.get('/menu/'+id);

    setValue('menu',res.data[0].menu);
    setValue('harga',res.data[0].harga);
    setGambar(<img src={res.data[0].gambar} height="100" width="100" alt="" />);
    setIdkategori(res.data[0].idkategori);
    setIdmenu(res.data[0].idmenu);
    setPilihan(false);
  }

  let no = 1;

  return (
    <div>
      <div className="row">
        <h2>Data Menu</h2>
      </div>
      <div className="row">
        <div>
          <p>{pesan}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
            <form onSubmit={handleSubmit(simpan)}>
                <div className="mb-3">
                    <label htmlFor="kategori" className="form-label">Kategori</label>
                    <select name="idkategori" {...register("idkategori")} className="form-control">
                        {
                            kategori.map( (val,index)=>val.idkategori === idkategori ? (<option key={index} selected value={val.idkategori}>{val.kategori}</option>) : (<option key={index} value={val.idkategori}>{val.kategori}</option>))
                        }
                        
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="menu" className="form-label">Menu</label>
                    <input type="text" className="form-control"  name="menu" placeholder="menu" {...register("menu", {
                        required: true
                    })} />
                    {errors.menu && errors.menu.type === "required" && (
                        <p className="errorMsg">Menu Harus Di isi !</p>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="harga" className="form-label">Harga</label>
                    <input type="text" className="form-control"  name="harga" placeholder="harga" {...register("harga")} />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="gambar" className="form-label">Gambar</label>
                    <input type="file" className="form-control" name="gambar" {...register("gambar")} />
                    
                    {gambar}
                </div>
                <div className="mb-3">
                    <input type="submit" className="btn btn-primary" name="submit" />
                </div>
            </form>
        </div>
      </div>
      
      <div className="row">
        <table className="table mt-4">
          <thead>
            <tr>
              <th>No</th>
              <th>Kategori</th>
              <th>Menu</th>
              <th>Gambar</th>
              <th>Harga</th>
              <th>Hapus</th>
              <th>Ubah</th>
            </tr>
          </thead>
          <tbody>
            {isi.map((val, index) => (
              <tr key={index}>
                <td>{no++}</td>
                <td>{val.kategori}</td>
                <td>{val.menu}</td>
                <td>
                  <img src={val.gambar} height="100" width="100" alt="" />
                </td>
                <td>{val.harga}</td>
                <td>
                  <button
                    onClick={() => hapus(val.idmenu)}
                    className="btn btn-danger"
                  >
                    Hapus
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => showData(val.idmenu)}
                    className="btn btn-warning"
                  >
                    Ubah
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row"></div>
    </div>
  );
};

export default Menu;
