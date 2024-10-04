const Sidebar = () => {
  return (
    <div className="col-span-3 bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Visits</h2>
      <ul>
        <li className="mb-2">
          <button className="w-full text-left bg-purple-100 text-purple-600 px-4 py-2 rounded">
            Kariobangi
          </button>
        </li>
        <li className="mb-2">
          <button className="w-full text-left bg-gray-100 text-gray-600 px-4 py-2 rounded">
            Mukuru Kwa Ruben
          </button>
        </li>
        <li className="mb-2">
          <button className="w-full text-left bg-gray-100 text-gray-600 px-4 py-2 rounded">
            Mukuru Kwa Njenga
          </button>
        </li>
        <li className="mb-2">
          <button className="w-full text-left bg-gray-100 text-gray-600 px-4 py-2 rounded">
            Baba Dogo
          </button>
        </li>
        <li className="mb-2">
          <button className="w-full text-left bg-gray-100 text-gray-600 px-4 py-2 rounded">
            Kibera
          </button>
        </li>
        <li>
          <button className="w-full text-left bg-gray-100 text-gray-600 px-4 py-2 rounded">
            Mukuru Kayaba
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
