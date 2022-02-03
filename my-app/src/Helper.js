export const themeToggler = (setFunc, theme) => {
  theme === "light" ? setFunc("dark") : setFunc("light");
};

export const addCountries = (setFunc, country, countries) => {
  if (countries.length === 0)
    fetch(`https://restcountries.com/v2/name/${country}`)
      .then((res) => res.json())
      .then((result) => {
        setFunc(result);
      });
  else {
    setFunc([]);
  }
};
