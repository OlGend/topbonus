"use client";
import React, { useEffect, useState } from 'react';
import useSWR from "swr";
import { getBrands } from "@/components/getBrands/getBrands2";
import { useLanguage } from "@/components/switcher/LanguageContext";

const KeitaroIframe = () => {
  const { language } = useLanguage();
  const [brands, setBrands] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categoryBrands = { key1: "Segment2", key2: "Premium" };
  const { data, error } = useSWR(
    ["brands", language],
    () => getBrands(language),
    { initialData: brands }
  );

  useEffect(() => {
    if (data) {
      const filteredLinks = data
        .filter((rowData) => rowData[categoryBrands.key1] === categoryBrands.key2)
        .map((rowData) => rowData.GoBig); // замените 'GoBig' на фактическое поле с URL

      setBrands(filteredLinks);
    }
  }, [data, categoryBrands.key1, categoryBrands.key2]);

  useEffect(() => {
    let intervalId;

    if (brands.length > 0 && currentIndex < brands.length) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex < brands.length - 1) {
            return prevIndex + 1;
          } else {
            clearInterval(intervalId); // Остановить, когда достигнут последний элемент
            return prevIndex;
          }
        });
      }, 2000);
    }

    // Очистить интервал при размонтировании компонента
    return () => clearInterval(intervalId);
  }, [brands, currentIndex]);

  useEffect(() => {
    const iframe = document.querySelector('iframe');

    iframe.onload = () => {
      // Проверяем, что содержимое загружено
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

      // Создаем новый скрипт
      const script = document.createElement('script');
      script.src = 'http://localhost:3000/new-script.js'; // Укажите путь к вашему скрипту
      script.onload = () => console.log('Новый скрипт загружен в iframe');

      // Добавляем скрипт в <head> внутри iframe
      iframeDoc.head.appendChild(script);
    };
  }, []);

  return (
    <div className="iframe-container">
      <iframe src="http://localhost:3000?url=https://boaboa24.com" width="600" height="400"></iframe>
    </div>
  );
};

export default KeitaroIframe;
