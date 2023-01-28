import React from 'react';
import useGet from '../Hook/useGet';

const Order = () => {
    const [isi] = useGet('/order');

    let no = 1;
    return (
        <div>
            <div className="row">
                <h2>Menu Order</h2>
            </div>
            <div className="row">
                <div></div>
            </div>
            <div className="row">
                <div>
                    <table className='table mt-4'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Pelanggan</th>
                                <th>TglOrder</th>
                                <th>Total</th>
                                <th>Bayar</th>
                                <th>Kembali</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isi.map((val,index)=>(
                                    <tr key={index}>
                                        <td>{no++}</td>
                                        <td>{val.pelanggan}</td>
                                        <td>{val.tglorder}</td>
                                        <td>{val.total}</td>
                                        <td>{val.bayar}</td>
                                        <td>{val.kembali}</td>
                                        <td>{
                                        val.status===0 ? <button className='btn btn-danger'>Belum Bayar</button> : <p>Lunas</p>
                                        }</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Order;
