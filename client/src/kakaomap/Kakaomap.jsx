import React, {  useState, useEffect } from 'react';
import '../kakaomap/kakaomap.scss'

const Kakaomap = () => {

    const [mapShow, setMapShow] = useState(false);

    const mapShowHandle = () => {
        setMapShow(!mapShow)
    }

    useEffect(() => {

        if(!mapShow) return;

        const script = document.createElement('script');
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=02812c8c99fd6aa576e5dbf72f3b5e4b&autoload=false";
        script.async = true;
        
        script.onload = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById('map');
                const options = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3,                                                 
                };
                new window.kakao.maps.Map(container, options);
            });
        };

        document.head.appendChild(script);

        return () => document.head.removeChild(script);
    }, [mapShow]);

    return (
        <div className='kakaomap'>
            <button className='show-button' onClick={mapShowHandle}>미팅 장소</button>
            {mapShow && (
                <div id="map" style={{ width: '400px', height: '300px'}}></div>
            )}
                 
        </div>
    );
};

export default Kakaomap;