function App() {
  return (
    <main className='grid place-items-center min-h-screen bg-blue-900'>
      <div className='space-y-5 mx-auto my-20'>
        <div className='flex justify-between items-center text-white'>
          <h1>calc</h1>
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
                id='theme-range'
                className='rounded-xl  bg-black w-full '
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
        <div className='rounded-lg bg-gray-900 h-24 flex items-center justify-end text-white p-5 px-7'>
          <p className='text-5xl pt-2'>1234</p>
        </div>
        <form className='grid bg-gray-800 p-6 grid-cols-4 rounded-lg gap-3 items-center'>
          <button value='7' className='cal-btns'>
            7
          </button>
          <button value='8' className='cal-btns'>
            8
          </button>
          <button value='9' className='cal-btns'>
            9
          </button>
          <button value='del' className='cal-btns text-xl uppercase h-full'>
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
            value='rest'
            className='cal-btns uppercase col-span-2 text-xl h-full'
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
