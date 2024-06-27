import { useRef } from "react";
import lang_ru from "../../lang/lang_ru";
import lang_eng from "../../lang/lang_eng";
import useLang from "../../store/useLang";

const LangChanger = ({ Langs }: { Langs: string[] }) => {
  const select = useRef<HTMLSelectElement>(null);
  const lang = useLang();
  const options = Langs.map((lang) => {
    return (
      <option key={lang} value={lang}>
        {lang.toUpperCase()}
      </option>
    );
  });
  function clickHandler() {
    if (!select.current) return;
    switch (select.current.value) {
      case "ru":
        lang.setLang(lang_ru);
        break;
      default:
        lang.setLang(lang_eng);
    }
  }
  return (
    <>
      <select ref={select}>{options}</select>
      <button className="btn" onClick={clickHandler}>
        {lang.langFile.choose}
      </button>
    </>
  );
};

export default LangChanger;
