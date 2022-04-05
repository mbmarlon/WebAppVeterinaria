function Error({mensaje}) {
  return (
      <div className="my-1 mx-2 bg-red-600 shadow-lg rounded-2xl py-4 text-center font-bold text-white">
          <h1>{mensaje}</h1>
      </div>
  )
}

export default Error