import api from "../api";

interface searchItem {
  content: string | number
}

const SubmitBtn = ({ content }: searchItem) => {
  console.log(content);
  const getPlayer = async () => {
    api.get(`/searchplayers.php?p=${content}`).then((response) => console.log(response));
  };

  return (
    <button
      type="submit"
      className=" p-2 border rounded bg-green-400 hover:bg-green-900 "
      onClick={getPlayer}
    >
      search
    </button>
  );
};

export default SubmitBtn;
