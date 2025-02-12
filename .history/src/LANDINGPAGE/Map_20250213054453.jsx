export const Map = ({ location }) => {
    const mapSrc = `https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=${encodeURIComponent(
      location
    )}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`;
  
    return (
      <div style={{ width: "100%", height: "600px" }}>
        <iframe
          title="Google Map"
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src={mapSrc}
          allowFullScreen
        ></iframe>
      </div>
    );
  };
  
  // Cara Menggunakan dengan lokasi yang berbeda
  const App = () => {
    return <GoogleMap location="pamulang, showroom, jl. panjajaran no.1" />;
  };
  