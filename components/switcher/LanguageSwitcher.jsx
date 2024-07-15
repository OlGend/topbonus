"use client";
import { useState, useEffect } from "react";
import useSWR, { mutate } from "swr";
import { useTranslation } from "react-i18next";
import Loader from "@/components/Loader";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const { data: selectedLanguage, error } = useSWR(
    "selectedLanguage",
    () => i18n.language
  );
  const [isLoading, setIsLoading] = useState(false);

  // Define language options for different partners and the default list
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

  // Define partner-specific language options
  const availableLanguages1039 = availableLanguages;
  const availableLanguages1043 = [
    { code: "all", label: "English", flag: "🌍" },
  ];
  const availableLanguages1044 = [
    { code: "cz", label: "Czech Republic", flag: "🇨🇿" },
    { code: "dk", label: "Denmark", flag: "🇩🇰" },
    { code: "fi", label: "Finland", flag: "🇫🇮" },
    { code: "fr", label: "France", flag: "🇫🇷" },
    { code: "de", label: "Germany", flag: "🇩🇪" },
    { code: "gr", label: "Greece", flag: "🇬🇷" },
    { code: "it", label: "Italy", flag: "🇮🇹" },
    { code: "nl", label: "Netherlands", flag: "🇳🇱" },
    { code: "no", label: "Norway", flag: "🇳🇴" },
    { code: "pl", label: "Poland", flag: "🇵🇱" },
    { code: "se", label: "Sweden", flag: "🇸🇪" },
    { code: "all", label: "English", flag: "🌍" },
  ];
  const availableLanguagesCLD_VIP = [
    { code: "au", label: "Australia", flag: "🇦🇺" },
    { code: "at", label: "Austria", flag: "🇦🇹" },
    { code: "be", label: "Belgium", flag: "🇧🇪" },
    { code: "ca", label: "Canada", flag: "🇨🇦" },
    { code: "ch", label: "Switzerland", flag: "🇨🇭" },
    { code: "cz", label: "The Czech Republic", flag: "🇨🇿" },
    { code: "de", label: "Germany", flag: "🇩🇪" },
    { code: "dk", label: "Denmark", flag: "🇩🇰" },
    { code: "fi", label: "Finland", flag: "🇫🇮" },
    { code: "fr", label: "France", flag: "🇫🇷" },
    { code: "gr", label: "Greece", flag: "🇬🇷" },
    { code: "hu", label: "Hungary", flag: "🇭🇺" },
    { code: "ie", label: "Ireland", flag: "🇮🇪" },
    { code: "it", label: "Italy", flag: "🇮🇹" },
    { code: "no", label: "Norway", flag: "🇳🇴" },
    { code: "nz", label: "New Zealand", flag: "🇳🇿" },
    { code: "pl", label: "Poland", flag: "🇵🇱" },
    { code: "se", label: "Sweden", flag: "🇸🇪" },
    { code: "sk", label: "Slovakia", flag: "🇸🇰" },
    { code: "all", label: "World", flag: "🌍" },
  ];

  // Select the correct language options based on the source
  let source;
  if (typeof window !== "undefined") {
    source = localStorage.getItem("source");
  }
  let newLng;
  switch (source) {
    case "partner1039":
      newLng = availableLanguages1039;
      break;
    case "partner1043":
      newLng = availableLanguages1043;
      break;
    case "partner1044":
      newLng = availableLanguages1044;
      break;
    case "CLD_VIP":
      newLng = availableLanguagesCLD_VIP;
      break;
    default:
      newLng = availableLanguages;
      break;
  }

  if (error) return <div>Failed to load</div>;

  const changeLanguage = async (lng) => {
    setIsLoading(true);
    localStorage.setItem("country", lng);
    try {
      mutate("selectedLanguage", lng, false);
      await i18n.changeLanguage(lng);
    } catch (error) {
      console.error("Ошибка при смене языка:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div>
        <p className="ml-4 mr-4">{t("Website language")}</p>
        <div className={`language-switcher ml-3 flex flex-col`}>
          <select
            className={`desktop-lang ${selectedLanguage}`}
            value={selectedLanguage}
            onChange={(e) => {
              const selected = newLng.find(
                (lang) => lang.code === e.target.value
              );
              if (selected) {
                changeLanguage(selected.code);
              } else {
                changeLanguage("en"); // Default to "World" if no match
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
      </div>
    </div>
  );
};

export default LanguageSwitcher;
