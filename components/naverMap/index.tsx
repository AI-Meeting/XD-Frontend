import styled from "@emotion/styled";
import React, { FC, useEffect, useRef, useState } from "react";

const NaverMap: FC = () => {
  const mapRef = useRef<HTMLElement | null | any>(null);
  const [location, setLocation] = useState<
    | {
        latitude: number;
        longitude: number;
      }
    | string
  >("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        alert("현재 위치를 알 수 없어 기본 위치로 지정합니다.");
        setLocation({ latitude: 37.498095, longitude: 127.02761 });
      }
    );
  }, []);

  useEffect(() => {
    if (typeof location !== "string") {
      let currentPosition = [location.latitude, location.longitude];

      mapRef.current = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: false,
      });
    }
  }, [location]);

  return <NaverMapContainer id="map"></NaverMapContainer>;
};

const NaverMapContainer = styled.div`
  width: 95%;
  height: 95%;
`;

export default NaverMap;
