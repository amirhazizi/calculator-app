import { useEffect, useState } from "react"
const localeTheme: number =
  parseInt(JSON.parse(localStorage.getItem("calculate-app") || "")) || 0
function App() {
  const [themeToggle, setThemeToggle] = useState(localeTheme)
  const [theme, setTheme] = useState("theme-1")
  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault()
  }
  useEffect(() => {
    if (themeToggle === 0) setTheme("theme-1")
    else if (themeToggle === 1) setTheme("theme-2")
    else setTheme("theme-3")
    localStorage.setItem("calculate-app", JSON.stringify(themeToggle))
  }, [themeToggle])
  useEffect(() => {
    if (!localeTheme) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setThemeToggle(3)
      } else {
        setThemeToggle(1)
      }
    }
  }, [])
  return (
    <main className={`grid place-items-center min-h-screen ${theme}`}>
      <div className='space-y-5 mx-auto my-20'>
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
        <div className='output-screen rounded-lg h-24 flex items-center justify-end p-5 px-7'>
          <p className='text-5xl pt-2'>1234</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className='keys-container grid p-6 grid-cols-4 rounded-lg gap-3 items-center'
        >
          <button value='7' className='cal-btns'>
            7
          </button>
          <button value='8' className='cal-btns'>
            8
          </button>
          <button value='9' className='cal-btns'>
            9
          </button>
          <button value='del' className='cal-btns text-2xl uppercase h-full'>
            del
          </button>
          <button value='4' className='cal-btns'>
            4
          </button>
          <button value='5' className='cal-btns'>
            5
          </button>
          <button value='6' className='cal-btns'>
            6
          </button>
          <button value='+' className='cal-btns'>
            +
          </button>
          <button value='1' className='cal-btns'>
            1
          </button>
          <button value='2' className='cal-btns'>
            2
          </button>
          <button value='3' className='cal-btns'>
            3
          </button>
          <button value='-' className='cal-btns'>
            -
          </button>
          <button value='.' className='cal-btns'>
            .
          </button>
          <button value='0' className='cal-btns'>
            0
          </button>
          <button value='/' className='cal-btns'>
            /
          </button>
          <button value='x' className='cal-btns'>
            x
          </button>
          <button
            type='reset'
            value='reset'
            className='cal-btns uppercase col-span-2 text-2xl h-full'
          >
            Reset
          </button>
          <button type='submit' value='=' className='cal-btns col-span-2'>
            =
          </button>
        </form>
      </div>
    </main>
  )
}

export default App
