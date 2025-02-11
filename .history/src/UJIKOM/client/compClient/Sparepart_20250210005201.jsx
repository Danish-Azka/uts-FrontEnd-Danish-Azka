import KategoriList from './KategoriList';

const SparepartPage = () => {
  return <KategoriList categoryName="Sparepart Kendaraan" />;
};

const ElektronikPage = () => {
  return <KategoriList categoryName="Elektronik" />;
};

export { SparepartPage, ElektronikPage };
