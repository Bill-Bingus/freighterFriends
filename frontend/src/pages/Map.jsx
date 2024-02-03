import React, { useEffect } from 'react';
import marker2 from "../assets/marker2.png";
import marker3 from "../assets/marker3.png";
import marker4 from "../assets/marker4.png";
import marker1 from "../assets/marker1.png";

const SimpleMarker = () => {
  useEffect(() => {
    const loadGoogleMapsScript = () => {
      // Define the callback function that's called once the Google Maps script loads
      window.initMap = () => {
        const center = { lat: 40.44330978393555, lng: -79.94284057617188 };


        //const directionsService = new window.google.maps.DirectionsService();
        const directionsRenderer = new window.google.maps.DirectionsRenderer();
        const map = new window.google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: center,
          mapId: 'Route Map'
        });

        function renderDirections(result) {
            var directionsRenderer = new google.maps.DirectionsRenderer;
            directionsRenderer.setMap(map);
            directionsRenderer.setDirections(result);
        }
            
        const directionsService = new google.maps.DirectionsService;
        function requestDirections(start, end) {
            directionsService.route({
                origin: start,
                destination: end,
                travelMode: google.maps.DirectionsTravelMode.DRIVING
                }, function(result) {
                    renderDirections(result);
                });
        }
        requestDirections('pittsburgh, pa', 'chicago, il');
        requestDirections('new orleans, la', 'buffalo, ny');
        requestDirections('charleston', 'erie');
        requestDirections('kansas city, ks', 'new york, ny');

        const markerTwo = new google.maps.Marker({
          position: center,
          icon: marker2,
          map: map, 
          size: new google.maps.Size(20, 20),
        }); 

        const markerThree = new google.maps.Marker({
          position: {lat: 40.261836, lng: -76.898279},
          icon: marker3,
          map:map,
          size: new google.maps.Size(20, 20),
        });

        const markerFour = new google.maps.Marker({
          position: {lat: 39.942710, lng: -82.991934},
          icon: marker4,
          map:map,
          size: new google.maps.Size(20, 20),
        });

        const markerOne = new google.maps.Marker({
          position: {lat: 42.867451, lng: -78.804178},
          icon: marker1,
          map:map,
          size: new google.maps.Size(20, 20),
        });

        

        /*const requestA = {origin: "pittsburgh", destination: "chicago", travelMode: "DRIVING"};
        directionsService.route(requestA, function (result, status) {
            //if (status == "OK") {
                directionsRenderer.setDirections(result);
            //}
        });
        //directionsRenderer.setMap(map)
        directionsRenderer.setMap(map) */
      };

      // Load the Google Maps API script
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBU2FAFbRlhIEDyHsPFxu021MC75vnct20&callback=initMap&libraries=maps,marker&v=beta`;
      script.async = true;
      document.body.appendChild(script);
    };

    loadGoogleMapsScript();
    // Remove script and global initMap function when the component unmounts
    return () => {
      window.initMap = null;
      const scriptTag = document.querySelector('script[src^="https://maps.googleapis.com/maps/api/js"]');
      document.body.appendChild(scriptTag);
      if (scriptTag) {
        document.body.removeChild(scriptTag);
      }
    };
  }, []); 

  return (
    <div id="map" style={{ height: '100vh' }}></div>
  );
}

export default SimpleMarker;