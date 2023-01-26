import {link} from './link.js';

export function ubah(){
    let id = 11;
    let data = {
        pelanggan : 'update axios',
        alamat : 'update axios',
        telp : '0912837465'
    };

    link.put('/pelanggan/'+id,data).then(res=>{
        let tampil = `<h1>${res.data.pesan}</h1>`;
        document.querySelector('#out').innerHTML = tampil;
    });
}