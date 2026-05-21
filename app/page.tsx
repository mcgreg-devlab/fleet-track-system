export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0B1739] text-white p-6 hidden md:flex flex-col">
        <h1 className="text-2xl font-bold mb-10">FLEET TRACK</h1>

        <nav className="space-y-4">
          <div className="bg-blue-600 px-4 py-3 rounded-xl">
            Dashboard
          </div>

          <div className="px-4 py-3 hover:bg-white/10 rounded-xl cursor-pointer">
            Live Tracking
          </div>

          <div className="px-4 py-3 hover:bg-white/10 rounded-xl cursor-pointer">
            Trips
          </div>

          <div className="px-4 py-3 hover:bg-white/10 rounded-xl cursor-pointer">
            Deliveries
          </div>

          <div className="px-4 py-3 hover:bg-white/10 rounded-xl cursor-pointer">
            Drivers
          </div>

          <div className="px-4 py-3 hover:bg-white/10 rounded-xl cursor-pointer">
            Vehicles
          </div>

          <div className="px-4 py-3 hover:bg-white/10 rounded-xl cursor-pointer">
            Reports
          </div>

          <div className="px-4 py-3 hover:bg-white/10 rounded-xl cursor-pointer">
            Alerts
          </div>

          <div className="px-4 py-3 hover:bg-white/10 rounded-xl cursor-pointer">
            Settings
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <section className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Dashboard
            </h1>

            <p className="text-gray-500">
              Overview of fleet operations
            </p>
          </div>

          <div className="bg-white px-5 py-3 rounded-xl shadow-sm">
            May 20, 2025
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-gray-500 text-sm">Total Vehicles</p>
            <h2 className="text-4xl font-bold mt-2">24</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-gray-500 text-sm">Vehicles On Trip</p>
            <h2 className="text-4xl font-bold mt-2">16</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-gray-500 text-sm">Completed Today</p>
            <h2 className="text-4xl font-bold mt-2">8</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-gray-500 text-sm">Pending Deliveries</p>
            <h2 className="text-4xl font-bold mt-2">5</h2>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                Live Tracking
              </h2>

              <button className="border px-4 py-2 rounded-lg text-sm">
                View Full Map
              </button>
            </div>

            <div className="h-[400px] bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500">
              Map Placeholder
            </div>
          </div>

          {/* Active Trips */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">
              Active Trips
            </h2>

            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-semibold">TRK-001</h3>
                <p className="text-sm text-gray-500">
                  Davao City → General Santos
                </p>
              </div>

              <div className="border-b pb-4">
                <h3 className="font-semibold">TRK-004</h3>
                <p className="text-sm text-gray-500">
                  Davao City → Tagum City
                </p>
              </div>

              <div className="border-b pb-4">
                <h3 className="font-semibold">TRK-007</h3>
                <p className="text-sm text-gray-500">
                  Davao City → Cagayan de Oro
                </p>
              </div>

              <div>
                <h3 className="font-semibold">TRK-009</h3>
                <p className="text-sm text-gray-500">
                  Davao City → Cotabato City
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}