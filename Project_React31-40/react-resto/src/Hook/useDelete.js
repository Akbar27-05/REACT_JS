import { link } from '../Axios/link';
import { useState } from 'react';

const UseDelete = (url) => {
    const [pesan,setPesan] = useState("");

    async function hapus(id) {
        if (window.confirm('Yakin untuk menghapus?')) {
            const res = await link.delete(url+id);
            setPesan(res.data.pesan);
        }
    }
    return {hapus,pesan,setPesan};
}

export default UseDelete;
