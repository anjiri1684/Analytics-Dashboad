const AnalyticsSection = () => {
  return (
    <>
      <div className="bg-white p-4 rounded shadow mb-6 animate-fadeIn">
        <h2 className="text-lg font-semibold mb-4">Key Issues</h2>
        <div className="grid grid-cols-3 gap-4">
          {[
            "Wrong Prescription",
            "Opened Late",
            "Bad Receipts",
            "Delay in Lab",
            "Careless Waste Disposal",
            "Late Check In",
          ].map((issue) => (
            <button
              key={issue}
              className="bg-gray-100 text-gray-600 px-4 py-2 rounded animate-pop"
            >
              {issue}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow mb-6 animate-fadeIn">
        <h2 className="text-lg font-semibold mb-4">Monitoring Period</h2>
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            {["Day", "Week", "Month", "Year"].map((period) => (
              <button
                key={period}
                className={`px-4 py-2 rounded ${
                  period === "Month"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {period}
              </button>
            ))}
          </div>
          <div className="text-gray-500">19 Dec 2019 - 18 Jan 2020</div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {["Foot Fall", "Patient Satisfaction", "Revenue"].map(
            (metric, index) => (
              <div
                key={metric}
                className="bg-gray-100 p-4 rounded animate-scaleUp"
              >
                <h3 className="text-gray-600 mb-2">{metric}</h3>
                <div className="text-2xl font-semibold mb-2">
                  {metric === "Revenue"
                    ? "4.2m"
                    : metric === "Foot Fall"
                    ? "1.9k"
                    : "7.8"}
                </div>
                <img
                  src={`https://picsum.photos/100/50?random=${index + 1}`}
                  alt={`Graph showing ${metric}`}
                />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default AnalyticsSection;
