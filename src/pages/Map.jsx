function map(){
    return(
        <div>
        <head>
            <title>Simple Marker</title>
            <script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBU2FAFbRlhIEDyHsPFxu021MC75vnct20&callback=console.debug&libraries=maps,marker&v=beta">
            </script>
            <style>
            /* Always set the map height explicitly to define the size of the div
            * element that contains the map. */
            gmp-map {
                height: 100%;
            }

            /* Optional: Makes the sample page fill the window. */
            html,
            body {
                height: 100%;
                margin: 0;
                padding: 0;
            }
            </style>
        </head>
        <body>
            <gmp-map center="40.44330978393555,-79.94284057617188" zoom="14" map-id="DEMO_MAP_ID">
            <gmp-advanced-marker position="40.44330978393555,-79.94284057617188" title="My location"></gmp-advanced-marker>
            </gmp-map>
        </body>
        </div>
    );
}