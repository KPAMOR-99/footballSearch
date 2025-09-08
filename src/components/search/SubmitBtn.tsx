

interface props {

  handleSearch: () => void
}




const SubmitBtn = ( { handleSearch }: props) => {


  return (
    <button
      type="submit"
      className=" p-2 border rounded bg-green-400 hover:bg-green-900 "
      onClick={handleSearch}
    >
      search
    </button>
  )
}

export default SubmitBtn;
