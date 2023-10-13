// Import the necessary packages 
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useEffect, useState } from 'react';



function Map({ agenceRef, wMap }) {

    const isMobile = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }


    const mapStyles = {        
        height: wMap,
        width: wMap,
        borderRadius: "9999px",
        marginTop: "1.5rem",
    };

    const [loader, setLoader] = useState(true);
      
    const [defaultCenter, setDefaultCenter] = useState({
        lat: 48.87427571895492,
        lng: 2.314856910179135
    });


    // Mettez à jour defaultCenter et positionMarqueur avec agenceRef seulement si agenceRef a été mis à jour.
    useEffect(() => {
        if (agenceRef) {
            setDefaultCenter(agenceRef);
            setLoader(false);
        }
    }, [agenceRef, defaultCenter])


    return(
        loader ? <div>Chargement...</div> :
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={15}
                center={defaultCenter}
                options={{ 
                    zoomControl: false, // désactivez le zoom
                    mapTypeControl: false, // désactivez le type de carte
                    fullscreenControl: false, // désactivez le mode plein ecran
                    streetViewControl: false, // désactivez le street view
                    scrollwheel: !isMobile(), // désactivez le scroll pour le zoom
                    gestureHandling: isMobile() ? 'none' : 'auto', // désactivez tous les gestes de zoom/toucher
                }}
            >
            <Marker key={`${defaultCenter.lat}-${defaultCenter.lng}`} position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    )
    
}

export default Map;