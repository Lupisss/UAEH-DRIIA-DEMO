/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {Dialog, FlatButton} from 'material-ui';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
//import SearchBox from "react-google-maps/lib/components/places/SearchBox";



//pone el mapa de google para dirección en el perfil
const MyMapComponent = withScriptjs(withGoogleMap(({address, dragged, isMarkerShown, /*lat=20.134484, lng=-98.802704, markerLat=20.1324695, markerLng=-98.8009663*/}) =>
    {
        // const googleMaps = window.google.maps;
        // const geocoder = new googleMaps.Geocoder();
        // geocoder.geocode({'location': NY},
        //     r=>console.log(r)
        // );
        // console.log(geocoder);
        return(<GoogleMap
            defaultZoom={14}
            defaultCenter={address}
        >
            {/*<SearchBox/>*/}
            {isMarkerShown && <Marker
                draggable={true}
                onDragEnd={dragged}
                position={address} />}

        </GoogleMap>);
    }
));


export const MapModal = ({address, open=false, handleClose, onDrag}) => {

    function dragged(e){
        console.log(e.latLng.lat());
        console.log(e.latLng.lng());
        onDrag(e);
    }

    //pone los botones de cancelar y guardar en la ventana de google maps
    const actions = [
        <FlatButton
            label="Cancelar"
            primary={true}
            onClick={handleClose}
        />,
        <FlatButton
            label="Guardar"
            primary={true}
            keyboardFocused={true}
            onClick={handleClose}
        />,
    ];
    return (
        //pone los letreros en la ventana de google maps
        <Dialog
            style={styles.dialog}
            title="Seleccióna tu dirección"
            modal={true}
            open={open}
            actions={actions}
            onRequestClose={handleClose}
        >
            <div style={styles.wraper}>
                <p>¿Donde vives?</p>
                {/*Pone la dirección de google maps */}
                <MyMapComponent
                    address={address}
                    dragged={dragged}
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>

        </Dialog>
    );
};

//MapModal.propTypes = {};




//pone estilo
const styles = {
    dialog: {
        display:"inherit"
    },
    wraper:{
        minHeight:"400px"
    }
};

