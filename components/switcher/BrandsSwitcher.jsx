"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import { useLanguage } from "./LanguageContext";

const BrandsSwitcher = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { language, setLanguage } = useLanguage(); // Используй состояние и функцию из контекста

  const ipData = async () => {
    try {
      const response = await fetch('/api/getLocation'); // Используем ваш API route
      const data = await response.json();
      if (data.country) {
        setLanguage(data.country.toLowerCase()); // Используй setLanguage из контекста
        if (typeof window !== "undefined") {
          localStorage.setItem("country_brands", data.country.toLowerCase());
        }
      }
    } catch (error) {
      console.error("Ошибка при запросе к API:", error);
      setLanguage("all");
    }
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("country_brands");
    if (!savedLanguage) {
      ipData(); // Вызываем функцию для получения данных из API, если localStorage пуст
    } else {
      setLanguage(savedLanguage); // Используем сохраненный язык из localStorage
    }
  }, []);

  const changeLanguage = (lng) => {
    setIsLoading(true);
    setLanguage(lng);
    localStorage.setItem("country_brands", lng);
    setIsLoading(false);
    window.location.reload();
  };

  // Остальная часть вашего кода остается без изменений

  const availableLanguages = [
    { code: "au", label: "Australia", flag: "🇦🇺" },
    { code: "ca", label: "Canada", flag: "🇨🇦" },
    { code: "de", label: "Germany", flag: "🇩🇪" },
    { code: "ie", label: "Ireland", flag: "🇮🇪" },
    { code: "nz", label: "New Zealand", flag: "🇳🇿" },
    { code: "no", label: "Norway", flag: "🇳🇴" },
    { code: "fi", label: "Finland", flag: "🇫🇮" },
    { code: "at", label: "Austria", flag: "🇦🇹" },
    { code: "ch", label: "Switzerland", flag: "🇨🇭" },
    { code: "dk", label: "Denmark", flag: "🇩🇰" },
    { code: "fr", label: "France", flag: "🇫🇷" },
    { code: "it", label: "Italy", flag: "🇮🇹" },
    { code: "pl", label: "Poland", flag: "🇵🇱" },
    { code: "se", label: "Sweden", flag: "🇸🇪" },
    { code: "cz", label: "Czech", flag: "🇨🇿" },
    { code: "sk", label: "Slovakia", flag: "🇸🇰" },
    { code: "be", label: "Belgium", flag: "🇧🇪" },
    { code: "gr", label: "Greece", flag: "🇬🇷" },
    { code: "nl", label: "Netherlands", flag: "🇳🇱" },
    { code: "hu", label: "Hungary", flag: "🇭🇺" },
    { code: "bg", label: "Bulgaria", flag: "🇧🇬" },
    { code: "all", label: "World", flag: "🌍" }
  ];
  const availableLanguages1039 = [
    { code: "au", label: "Australia", flag: "🇦🇺" },
    { code: "at", label: "Austria", flag: "🇦🇹" },
    { code: "be", label: "Belgium", flag: "🇧🇪" },
    { code: "bg", label: "Bulgaria", flag: "🇧🇬" },
    { code: "ca", label: "Canada", flag: "🇨🇦" },
    { code: "cz", label: "Czech", flag: "🇨🇿" },
    { code: "dk", label: "Denmark", flag: "🇩🇰" },
    { code: "fi", label: "Finland", flag: "🇫🇮" },
    { code: "fr", label: "France", flag: "🇫🇷" },
    { code: "de", label: "Germany", flag: "🇩🇪" },
    { code: "gr", label: "Greece", flag: "🇬🇷" },
    { code: "hu", label: "Hungary", flag: "🇭🇺" },
    { code: "ie", label: "Ireland", flag: "🇮🇪" },
    { code: "it", label: "Italy", flag: "🇮🇹" },
    { code: "nl", label: "Netherlands", flag: "🇳🇱" },
    { code: "nz", label: "New Zealand", flag: "🇳🇿" },
    { code: "no", label: "Norway", flag: "🇳🇴" },
    { code: "pl", label: "Poland", flag: "🇵🇱" },
    { code: "pt", label: "Portugal", flag: "🇵🇹" },
    { code: "sk", label: "Slovakia", flag: "🇸🇰" },
    { code: "es", label: "Spain", flag: "🇪🇸" },
    { code: "se", label: "Sweden", flag: "🇸🇪" },
    { code: "ch", label: "Switzerland", flag: "🇨🇭" },
    { code: "tr", label: "Turkey", flag: "🇹🇷" },
    { code: "gb", label: "United Kingdom", flag: "🇬🇧" },
    { code: "all", label: "World", flag: "🌍" },
  ];
  const availableLanguages1043 = [
    { code: "ca", label: "Canada", flag: "🇨🇦" },
    { code: "us", label: "United States", flag: "🇺🇸" },
    { code: "all", label: "World", flag: "🌍" },
  ];
  const availableLanguages1044 = [
    { code: "au", label: "Australia", flag: "🇦🇺" },
    { code: "at", label: "Austria", flag: "🇦🇹" },
    { code: "be", label: "Belgium", flag: "🇧🇪" },
    { code: "ca", label: "Canada", flag: "🇨🇦" },
    { code: "cz", label: "The Czech Republic", flag: "🇨🇿" },
    { code: "dk", label: "Denmark", flag: "🇩🇰" },
    { code: "fi", label: "Finland", flag: "🇫🇮" },
    { code: "fr", label: "France", flag: "🇫🇷" },
    { code: "de", label: "Germany", flag: "🇩🇪" },
    { code: "gb", label: "Great Britain", flag: "🇬🇧" },
    { code: "gr", label: "Greece", flag: "🇬🇷" },
    { code: "ie", label: "Ireland", flag: "🇮🇪" },
    { code: "it", label: "Italy", flag: "🇮🇹" },
    { code: "nl", label: "Netherlands", flag: "🇳🇱" },
    { code: "no", label: "Norway", flag: "🇳🇴" },
    { code: "nz", label: "New Zealand", flag: "🇳🇿" },
    { code: "pl", label: "Poland", flag: "🇵🇱" },
    { code: "se", label: "Sweden", flag: "🇸🇪" },
    { code: "za", label: "South Africa", flag: "🇿🇦" },
    { code: "ch", label: "Switzerland", flag: "🇨🇭" },
    { code: "us", label: "USA", flag: "🇺🇸" },
    { code: "all", label: "World", flag: "🌍" },
  ];
  const availableLanguagesCLD_VIP = [
    { code: "all", label: "All", flag: "🌍" },
    { code: "at", label: "Austria", flag: "🇦🇹" },
    { code: "au", label: "Australia", flag: "🇦🇺" },
    { code: "be", label: "Belgium", flag: "🇧🇪" },
    { code: "ca", label: "Canada", flag: "🇨🇦" },
    { code: "ch", label: "Switzerland", flag: "🇨🇭" },
    { code: "cz", label: "Czech Republic", flag: "🇨🇿" },
    { code: "de", label: "Germany", flag: "🇩🇪" },
    { code: "dk", label: "Denmark", flag: "🇩🇰" },
    { code: "es", label: "Spain", flag: "🇪🇸" },
    { code: "fi", label: "Finland", flag: "🇫🇮" },
    { code: "fr", label: "France", flag: "🇫🇷" },
    { code: "gb", label: "United Kingdom", flag: "🇬🇧" },
    { code: "gr", label: "Greece", flag: "🇬🇷" },
    { code: "hu", label: "Hungary", flag: "🇭🇺" },
    { code: "ie", label: "Ireland", flag: "🇮🇪" },
    { code: "it", label: "Italy", flag: "🇮🇹" },
    { code: "nl", label: "Netherlands", flag: "🇳🇱" },
    { code: "no", label: "Norway", flag: "🇳🇴" },
    { code: "nz", label: "New Zealand", flag: "🇳🇿" },
    { code: "pl", label: "Poland", flag: "🇵🇱" },
    { code: "pt", label: "Portugal", flag: "🇵🇹" },
    { code: "se", label: "Sweden", flag: "🇸🇪" },
    { code: "sk", label: "Slovakia", flag: "🇸🇰" },
  ];

  
  let item;
  if (typeof window !== "undefined") {
    item = localStorage.getItem("source");
  }
  let newLng;
  if (item === "partner1039") {
    newLng = availableLanguages1039;
  } else if (item === "partner1043") {
    newLng = availableLanguages1043;
  } else if (item === "partner1044") {
    newLng = availableLanguages1044;
  } else if (item === "CLD_VIP") {
    newLng = availableLanguagesCLD_VIP;
  } else if (item === "partner1045_b1") {
    newLng = availableLanguagesCLD_VIP;
  } else {
    newLng = availableLanguages;
  }

  const [lng, setLng] = useState("all");

  const fetchBrands = (language, newLng) => {
    const matchedLanguage = newLng.find((lng) => lng.code === language);
    setLng(matchedLanguage ? matchedLanguage.code : "all");
  };
  useEffect(() => {
    fetchBrands(language, newLng);
  }, [language, newLng]);

  return (
    <div className={`language-switcher ml-3 flex flex-col`}>
      <select
        className={`desktop-lang ${language}`}
        value={lng}
        onChange={(e) => {
          const selected = newLng.find((lang) => lang.code === e.target.value);
          if (selected) {
            changeLanguage(selected.code);
          }
        }}
      >
        {newLng.map((language) => (
          <option
            key={language.code}
            value={language.code}
            style={{ fontSize: "20px" }}
          >
            {language.flag} {language.label}
          </option>
        ))}
      </select>

      {isLoading && <Loader />}
    </div>
  );
};

export default BrandsSwitcher;
