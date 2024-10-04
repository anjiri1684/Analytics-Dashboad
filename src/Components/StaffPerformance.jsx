const StaffPerformance = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
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
          <tr>
            <td className="py-2">Mercy Mukoya</td>
            <td className="py-2">+2.3</td>
            <td className="py-2">+1.2</td>
            <td className="py-2">98%</td>
            <td className="py-2">5</td>
          </tr>
          <tr>
            <td className="py-2">Kennedy Aiyeka</td>
            <td className="py-2">+1.8</td>
            <td className="py-2">+0.8</td>
            <td className="py-2">95%</td>
            <td className="py-2">4</td>
          </tr>
          <tr>
            <td className="py-2">Stephanie Tomno</td>
            <td className="py-2">+1.5</td>
            <td className="py-2">+0.5</td>
            <td className="py-2">92%</td>
            <td className="py-2">3</td>
          </tr>
          <tr>
            <td className="py-2">Faith Kinya</td>
            <td className="py-2">+1.2</td>
            <td className="py-2">+0.3</td>
            <td className="py-2">89%</td>
            <td className="py-2">2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StaffPerformance;
