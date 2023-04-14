import { useEffect, useState } from "react"
import localedata from "./localStorage"
// const localedata = JSON.parse(localStorage.getItem("calculate-app") || "") || {
//   theme: 0,
//   prevResult: null,
// }
function App() {
  const [themeToggle, setThemeToggle] = useState(localedata?.theme)
  const [theme, setTheme] = useState("theme-1")
  const [firstValue, setFirstValue] = useState<string[]>([
    localedata.prevResult,
  ])
  const [secondValue, setSecondValue] = useState<string[]>([])
  const [operator, setOperator] = useState("")
  const [result, setResult] = useState(0)
  const [preview, setPreview] = useState("")
  const [previewResult, setPreviewResult] = useState("")
  const calculateResult = () => {
    if (
      firstValue.length > 0 &&
      operator.length > 0 &&
      secondValue.length > 0
    ) {
      const value_1 = parseFloat(firstValue.join(""))
      const value_2 = parseFloat(secondValue.join(""))
      let result = 0
      if (operator === "+") result = value_1 + value_2
      else if (operator === "-") result = value_1 - value_2
      else if (operator === "*") result = value_1 * value_2
      else result = parseFloat((value_1 / value_2).toFixed(3))
      setResult(result)
      setPreviewResult(`${preview} =`)
      setFirstValue(String(result).split(""))
      localStorage.setItem(
        "calculate-app",
        JSON.stringify({ ...localedata, prevResult: result })
      )
      setSecondValue([])
      setOperator("")
    } else if (firstValue.length > 0 && operator.length === 0) {
      setPreview("enter operator")
    } else {
      setPreview("enter value")
    }
  }
  const setValues = (value: string) => {
    setPreviewResult("")
    if (operator) {
      setSecondValue((oldValues) => {
        if (value === ".") {
          if (oldValues.find((oldvalue) => oldvalue === ".")) return oldValues
        }
        return [...oldValues, value]
      })
    } else {
      setFirstValue((oldValues) => {
        if (value === ".") {
          if (oldValues.find((oldvalue) => oldvalue === ".")) return oldValues
        }
        return [...oldValues, value]
      })
    }
  }
  const updateOperator = (operator: string) => {
    setPreviewResult("")
    if (firstValue.length > 0 && secondValue.length === 0) {
      setOperator(operator)
    } else if (secondValue.length > 0) {
      calculateResult()
      setOperator(operator)
    } else {
      if (operator === "-") setFirstValue([operator])
      else setPreview("please enter value first")
    }
  }
  const deleteValue = () => {
    setPreviewResult("")
    if (firstValue.length > 0 && secondValue.length === 0) {
      setFirstValue([])
      setOperator("")
    } else if (secondValue.length > 0) {
      setSecondValue([])
    } else {
      setPreview("please enter value")
    }
  }
  const resetToDefault = () => {
    setFirstValue([])
    setSecondValue([])
    setOperator("")
    setPreviewResult("")
    localStorage.setItem(
      "calculate-app",
      JSON.stringify({ ...localedata, prevResult: null })
    )
  }

  useEffect(() => {
    if (themeToggle === 0) setTheme("theme-1")
    else if (themeToggle === 1) setTheme("theme-2")
    else setTheme("theme-3")
    localStorage.setItem(
      "calculate-app",
      JSON.stringify({ ...localedata, theme: themeToggle })
    )
  }, [themeToggle])
  useEffect(() => {
    if (localedata.theme === 0 && localedata.theme) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setThemeToggle(2)
      } else {
        setThemeToggle(1)
      }
    }
  }, [])
  useEffect(() => {
    if (
      firstValue.length > 0 &&
      operator.length === 0 &&
      secondValue.length === 0
    ) {
      setPreview(`${firstValue.join("")}`)
    } else if (
      firstValue.length > 0 &&
      operator.length > 0 &&
      secondValue.length === 0
    ) {
      setPreview(`${firstValue.join("")} ${operator}`)
    } else if (
      firstValue.length > 0 &&
      operator.length > 0 &&
      secondValue.length > 0
    ) {
      setPreview(`${firstValue.join("")} ${operator} ${secondValue.join("")}`)
    } else {
      setPreview("0")
    }
  }, [firstValue, operator, secondValue])
  return (
    <main className={`grid place-items-center min-h-screen ${theme}`}>
      <div className='space-y-5 mx-auto my-10'>
        <div className='header flex justify-between items-center '>
          <h1 className='text-5xl'>calc</h1>
          <div className='flex gap-x-4 items-center justify-end'>
            <p className='uppercase text-xs mt-2'>theme</p>
            <label
              id='theme-container'
              className='relative w-2/5'
              htmlFor='theme-range'
            >
              <input
                type='range'
                min='0'
                max='2'
                value={themeToggle}
                onChange={(e) => setThemeToggle(parseInt(e.target.value))}
                id='theme-range'
                className='rounded-xl w-full '
              />
              <span className='absolute translate-x-2 -top-3 left-0 text-xs'>
                1
              </span>
              <span className='absolute -translate-x-1 -top-3 left-1/2 text-xs'>
                2
              </span>
              <span className='absolute -translate-x-2 -top-3 right-0 text-xs'>
                3
              </span>
            </label>
          </div>
        </div>
        <div className='output-screen rounded-lg h-24 flex items-center justify-end p-5 relative px-7'>
          <p className='absolute top-2 left-0 text-gray-600 translate-x-5 text-base'>
            {previewResult}
          </p>
          <p className='text-5xl pt-2'>{preview}</p>
        </div>
        <div className='keys-container grid p-6 grid-cols-4 rounded-lg gap-3 items-center'>
          <button onClick={() => setValues("7")} className='cal-btns'>
            7
          </button>
          <button onClick={() => setValues("8")} className='cal-btns'>
            8
          </button>
          <button onClick={() => setValues("9")} className='cal-btns'>
            9
          </button>
          <button
            onClick={deleteValue}
            value='del'
            className='cal-btns text-2xl uppercase h-full'
          >
            del
          </button>
          <button onClick={() => setValues("4")} className='cal-btns'>
            4
          </button>
          <button onClick={() => setValues("5")} className='cal-btns'>
            5
          </button>
          <button onClick={() => setValues("6")} className='cal-btns'>
            6
          </button>
          <button onClick={() => updateOperator("+")} className='cal-btns'>
            +
          </button>
          <button onClick={() => setValues("1")} className='cal-btns'>
            1
          </button>
          <button onClick={() => setValues("2")} className='cal-btns'>
            2
          </button>
          <button onClick={() => setValues("3")} className='cal-btns'>
            3
          </button>
          <button onClick={() => updateOperator("-")} className='cal-btns'>
            -
          </button>
          <button onClick={() => setValues(".")} className='cal-btns'>
            .
          </button>
          <button onClick={() => setValues("0")} className='cal-btns'>
            0
          </button>
          <button onClick={() => updateOperator("/")} className='cal-btns'>
            /
          </button>
          <button onClick={() => updateOperator("*")} className='cal-btns'>
            x
          </button>
          <button
            onClick={resetToDefault}
            value='reset'
            className='cal-btns uppercase col-span-2 text-2xl h-full'
          >
            Reset
          </button>
          <button
            onClick={calculateResult}
            value='='
            className='cal-btns col-span-2'
          >
            =
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
