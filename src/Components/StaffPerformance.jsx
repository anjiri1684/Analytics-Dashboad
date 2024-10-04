const staffData = [
  {
    name: "Mercy Mukoya",
    efficiency: "78%",
    npsDelta: "-1.2",
    efficiencyDelta: "2.3",
    respond: "Yes",
  },
  {
    name: "Kennedy Aiyeka",
    efficiency: "82%",
    npsDelta: "0.5",
    efficiencyDelta: "1.8",
    respond: "No",
  },
  {
    name: "Stephanie Tomno",
    efficiency: "65%",
    npsDelta: "-0.8",
    efficiencyDelta: "-0.3",
    respond: "Yes",
  },
  {
    name: "Faith Kinya",
    efficiency: "90%",
    npsDelta: "1.2",
    efficiencyDelta: "2.1",
    respond: "No",
  },
  {
    name: "John Mwangi",
    efficiency: "72%",
    npsDelta: "-0.3",
    efficiencyDelta: "0.8",
    respond: "Yes",
  },
  {
    name: "Grace Wanjiru",
    efficiency: "85%",
    npsDelta: "1.5",
    efficiencyDelta: "1.7",
    respond: "No",
  },
];

const StaffPerformance = () => {
  return (
    <div className="bg-white p-4 rounded shadow animate-fadeIn">
      <h2 className="text-lg font-semibold mb-4">Staff Performance</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2">Staff Name</th>
            <th className="py-2">Efficiency Delta</th>
            <th className="py-2">NPS Delta</th>
            <th className="py-2">Efficiency</th>
            <th className="py-2">Respond</th>
          </tr>
        </thead>
        <tbody>
          {staffData.map(
            ({ name, efficiency, npsDelta, efficiencyDelta, respond }) => (
              <tr key={name}>
                <td className="py-2">{name}</td>
                <td className="py-2">{efficiencyDelta}</td>
                <td className="py-2">{npsDelta}</td>
                <td className="py-2">{efficiency}</td>
                <td className="py-2">{respond}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StaffPerformance;
