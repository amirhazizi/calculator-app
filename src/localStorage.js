const localedata = JSON.parse(localStorage.getItem("calculate-app")) || {
  theme: 0,
  prevResult: undefined,
}

export default localedata
