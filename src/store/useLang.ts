import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LangFile } from "../lang/LangFile";
import lang_eng from "../lang/lang_eng";

type Lang = {
    langFile: LangFile;
    setLang: (lang: LangFile) => void;
}

const useLang = create(persist<Lang>((set) => {
    return {
        langFile: lang_eng,
        setLang: (lang) => {
            set(() => ({
              langFile: lang,
            }));
          },
    }
    },{
    name: "useLang"
}));
export default useLang;