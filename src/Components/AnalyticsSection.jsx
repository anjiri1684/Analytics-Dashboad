const AnalyticsSection = () => {
  return (
    <>
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">Key Issues</h2>
        <div className="grid grid-cols-3 gap-4">
          <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded">
            Wrong Prescription
          </button>
          <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded">
            Opened Late
          </button>
          <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded">
            Bad Receipts
          </button>
          <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded">
            Delay in Lab
          </button>
          <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded">
            Careless Waste Disposal
          </button>
          <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded">
            Late Check In
          </button>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">Monitoring Period</h2>
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded">
              Day
            </button>
            <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded">
              Week
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded">
              Month
            </button>
            <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded">
              Year
            </button>
          </div>
          <div className="text-gray-500">10 Dec 2019 - 10 Jan 2020</div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsSection;
