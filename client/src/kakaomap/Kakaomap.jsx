import React, { useState, useEffect } from 'react';
import DaumPostcode from 'react-daum-postcode';
import '../kakaomap/kakaomap.scss';

const Kakaomap = () => {
    const [mapShow, setMapShow] = useState(false);
    const [location, setLocation] = useState(null);

    // 컴포넌트가 마운트될 때 localStorage에서 좌표 불러오기
    useEffect(() => {
        const savedLocation = localStorage.getItem('mapLocation');
        if (savedLocation) {
            setLocation(JSON.parse(savedLocation));
        }
    }, []);

    const mapShowHandle = () => {
        setMapShow(!mapShow);
    };

    const handleComplete = (data) => {
        const fullAddress = data.address;
        
        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(fullAddress, (result, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
                const coords = {
                    lat: parseFloat(result[0].y),
                    lng: parseFloat(result[0].x),
                };
                setLocation(coords);
                localStorage.setItem('mapLocation', JSON.stringify(coords)); // 좌표를 localStorage에 저장
                window.location.replace('/list');
            }
        });
    };

    useEffect(() => {
        if (!mapShow) return;

        const script = document.createElement('script');
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=02812c8c99fd6aa576e5dbf72f3b5e4b&autoload=false&libraries=services";
        script.async = true;

        script.onload = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById('map');
                const options = {
                    center: location 
                        ? new window.kakao.maps.LatLng(location.lat, location.lng)
                        : new window.kakao.maps.LatLng(33.450701, 126.570667), 
                    level: 3,
                };
                const map = new window.kakao.maps.Map(container, options);

                if (location) {
                    const newCenter = new window.kakao.maps.LatLng(location.lat, location.lng);
                    map.setCenter(newCenter);

                    const marker = new window.kakao.maps.Marker({
                        position: newCenter,
                    });
                    marker.setMap(map);
                }
            });
        };

        document.head.appendChild(script);

        return () => document.head.removeChild(script);
    }, [mapShow, location]);

    return (
        <div className='kakaomap'>
            <button className='show-button' onClick={mapShowHandle}>Location</button>
            {mapShow && (
                <>
                    <DaumPostcode onComplete={handleComplete} />
                    <div id="map" className='map-main' style={{ width: '400px', height: '300px' }}></div>
                </>
            )}
        </div>
    );
};

export default Kakaomap;