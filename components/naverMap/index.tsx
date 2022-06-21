import styled from "@emotion/styled";
import React, { FC, useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { CompanyListMapType } from "../../@types/CompanyType";
import { currentCompanyIdAtom } from "../../lib/module/atom/company";
import { useCompanyListMap } from "../../queries/Company";
import { mapMarker, mapMarkerHover } from "./mapMarker";

const NaverMap: FC = () => {
  const mapRef = useRef<HTMLElement | null | any>(null);
  const [location, setLocation] = useState<
    | {
        latitude: number;
        longitude: number;
      }
    | string
  >("");
  const { data } = useCompanyListMap();
  const setCurrentCompany = useSetRecoilState(currentCompanyIdAtom);

  useEffect(() => {
    setCurrentCompany(0);

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

  function highlightMarker(marker, company: CompanyListMapType) {
    const content = marker.getIcon();

    content.content = [
      mapMarkerHover(company.name, company.field, company.level),
    ].join("");
    marker.setIcon(content);

    marker.setZIndex(1000);
  }

  function unHighlightMarker(marker, company: CompanyListMapType) {
    const content = marker.getIcon();

    content.content = [
      mapMarker(company.name, company.field, company.level),
    ].join("");
    marker.setIcon(content);

    marker.setZIndex(100);
  }

  useEffect(() => {
    if (data) {
      data.map((company: CompanyListMapType) => {
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            company.address[1],
            company.address[0]
          ),
          map: mapRef.current,
          icon: {
            content: [
              mapMarker(company.name, company.field, company.level),
            ].join(""),
          },
          zIndex: 100,
        });

        naver.maps.Event.addListener(marker, "mouseover", (e: any) => {
          highlightMarker(e.overlay, company);
        });

        naver.maps.Event.addListener(marker, "mouseout", (e: any) => {
          unHighlightMarker(e.overlay, company);
        });

        naver.maps.Event.addListener(marker, "click", (e: any) => {
          const latLng = new naver.maps.LatLng(
            Number(company.address[1]),
            Number(company.address[0])
          );
          mapRef.current.panTo(latLng, e?.coord);
          setCurrentCompany(company.companyId);
        });
      });
    }
  }, [data]);

  return <NaverMapContainer id="map"></NaverMapContainer>;
};

const NaverMapContainer = styled.div`
  width: 95%;
  height: 95%;
  z-index: 0;
`;

export default NaverMap;
