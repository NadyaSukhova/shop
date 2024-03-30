export function changeLang(lang) {
  var weighted = 0,
    simple = 1;
  if (lang == "eng") [weighted, simple] = [simple, weighted];
  document.getElementsByClassName("Footer-field-language")[
    weighted
  ].style.fontWeight = "700";
  document.getElementsByClassName("Footer-field-language")[
    weighted
  ].style.color = "#FFA542";
  document.getElementsByClassName("Footer-field-language")[
    simple
  ].style.fontWeight = "500";
  document.getElementsByClassName("Footer-field-language")[simple].style.color =
    "#101010";
  return {
    type: "change-language / sucess",
    payload: lang,
  };
}
