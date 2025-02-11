import React from 'react'
import KategoriList from './KategoriList';

const SparepartPage = () => {
  return <KategoriList categoryName="Sparepart Kendaraan" />;
};

const ElektronikPage = () => {
  return <KategoriList categoryName="Elektronik" />;
};

export { SparepartPage, ElektronikPage };

const Sparepart = () => {
  return (
    <div>Sparepart</div>
  )
}

export default Sparepart