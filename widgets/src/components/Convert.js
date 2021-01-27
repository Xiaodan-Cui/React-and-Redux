import React, { useState, useEffect } from "react";
import axios from "axios";
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms - IwDlM;
//POST https://translation.googleapis.com/language/translate/v2

const Convert = (props) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouneText] = useState("");
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouneText(props.text);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [props.text]);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms - IwDlM",
            q: debouncedText,
            target: props.language.value,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    search();
  }, [props.language, debouncedText]);
  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
