import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import AnalyticsSection from "./Components/AnalyticsSection";
import StaffPerformance from "./Components/StaffPerformance";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Header />
      <h1 className="text-2xl font-semibold mb-6 animate-fadeIn">Analytics</h1>
      <div className="grid grid-cols-12 gap-6">
        <Sidebar />
        <div className="col-span-9">
          <AnalyticsSection />
          <StaffPerformance />
        </div>
      </div>
    </div>
  );
};

export default App;
