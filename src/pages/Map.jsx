import React, { useEffect } from 'react';

const SimpleMarker = () => {
  useEffect(() => {
    const loadGoogleMapsScript = () => {
      // Define the callback function that's called once the Google Maps script loads
      window.initMap = () => {
        const center = { lat: 40.44330978393555, lng: -79.94284057617188 };
        const directionsService = new window.google.maps.DirectionsService();
        const directionsRenderer = new window.google.maps.DirectionsRenderer();
        const map = new window.google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: center,
          mapId: 'Route Map'
        });

        const request = {origin: "pittsburgh", destination: "chicago", travelMode: "DRIVING"};
        directionsService.route(request, function (result, status) {
            //if (status == "OK") {
                directionsRenderer.setDirections(result);
            //}
        });
        directionsRenderer.setMap(map)
      };

      // Load the Google Maps API script
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBU2FAFbRlhIEDyHsPFxu021MC75vnct20&callback=initMap&libraries=maps,marker&v=beta`;
      script.async = true;
      document.body.appendChild(script);
    };

    loadGoogleMapsScript();
    // Remove script and global initMap function when the component unmounts
    /*return () => {
      window.initMap = null;
      const scriptTag = document.querySelector('script[src^="https://maps.googleapis.com/maps/api/js"]');
      document.body.appendChild(scriptTag);
      if (scriptTag) {
        document.body.removeChild(scriptTag);
      }
    };*/
  }, []); 

  return (
    <div id="map" style={{ height: '100vh' }}></div>
  );
}

export default SimpleMarker;