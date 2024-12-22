const SearchForm = () => {
  return (
    <div className="w-full rounded-lg bg-black">
      <form className="flex flex-wrap items-center justify-center gap-4">
        <div>
          <label className="text-white text-base">Name</label>
          <input
            type="text"
            placeholder="Search by name"
            className=" bg-gray-100 border outline-none  text-gray-900 text-sm rounded-lg w-full p-2.5"
          />
        </div>
        <div>
          <label className="text-white text-base">Address</label>
          <input
            type="text"
            placeholder="Search by address"
            className=" bg-gray-100 border outline-none  text-gray-900 text-sm rounded-lg w-full p-2.5"
          />
        </div>
        <div>
          <label className="text-white text-base">Date</label>
          <input
            type="date"
            className=" bg-gray-100 border outline-none  text-gray-900 text-sm rounded-lg w-full p-2.5"
          />
        </div>
        <button
          type="button"
          className="text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 mt-6"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
