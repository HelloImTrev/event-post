// [START maps_react_map_marker_component]

const Marker = (options) => {
  const [marker, setMarker] = React.useState();
  console.log("markerrrrrr", marker);

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);
  return null;
};

export default Marker;
