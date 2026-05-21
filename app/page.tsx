import Sidebar from "./components/dashboard/Sidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f7fb] flex">
      <Sidebar />

      <section className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Overview of fleet operations
            </p>
          </div>

          <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100">
            May 20, 2025
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <Card title="Total Vehicles" value="24" />
          <Card title="Vehicles On Trip" value="16" />
          <Card title="Completed Today" value="8" />
          <Card title="Pending Deliveries" value="5" />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Map */}
          <div className="xl:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-semibold">
                  Live Tracking
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  Realtime fleet location monitoring
                </p>
              </div>

              <button className="border border-gray-200 px-4 py-2 rounded-xl hover:bg-gray-100 transition">
                View Full Map
              </button>
            </div>

            <div className="h-[500px] rounded-3xl bg-gradient-to-br from-[#dbeafe] to-[#eff6ff] flex items-center justify-center">
              <p className="text-gray-500 text-lg">
                Interactive Map Placeholder
              </p>
            </div>
          </div>

          {/* Active Trips */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">
                Active Trips
              </h2>

              <button className="text-blue-600 text-sm">
                View All
              </button>
            </div>

            <div className="space-y-4">
              <TripCard
                truck="TRK-001"
                route="Davao → General Santos"
                status="On Trip"
              />

              <TripCard
                truck="TRK-004"
                route="Davao → Tagum"
                status="Moving"
              />

              <TripCard
                truck="TRK-007"
                route="Davao → CDO"
                status="On Trip"
              />

              <TripCard
                truck="TRK-009"
                route="Davao → Cotabato"
                status="Stopped"
              />
            </div>
          </div>
        </div>

        {/* Bottom Widgets */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">
          {/* Recent Deliveries */}
          <div className="xl:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">
                Recent Deliveries
              </h2>

              <button className="text-blue-600 text-sm">
                View All
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-400 text-sm border-b">
                    <th className="pb-4">Trip ID</th>
                    <th className="pb-4">Driver</th>
                    <th className="pb-4">Destination</th>
                    <th className="pb-4">Status</th>
                  </tr>
                </thead>

                <tbody className="text-sm">
                  <DeliveryRow
                    trip="TRP-2025-001"
                    driver="John D."
                    destination="General Santos"
                    status="Delivered"
                  />

                  <DeliveryRow
                    trip="TRP-2025-002"
                    driver="Mark A."
                    destination="Tagum City"
                    status="In Transit"
                  />

                  <DeliveryRow
                    trip="TRP-2025-003"
                    driver="Randy C."
                    destination="Cagayan de Oro"
                    status="Pending"
                  />

                  <DeliveryRow
                    trip="TRP-2025-004"
                    driver="Leo M."
                    destination="Butuan City"
                    status="Delivered"
                  />
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">
                Recent Activity
              </h2>

              <button className="text-blue-600 text-sm">
                View All
              </button>
            </div>

            <div className="space-y-5">
              <ActivityItem
                title="TRK-001 delivered package"
                time="10:30 AM"
              />

              <ActivityItem
                title="TRK-004 departed to Tagum"
                time="09:15 AM"
              />

              <ActivityItem
                title="TRK-007 uploaded proof photo"
                time="09:05 AM"
              />

              <ActivityItem
                title="TRK-009 stopped for 15 mins"
                time="08:45 AM"
              />

              <ActivityItem
                title="TRK-015 completed trip"
                time="08:30 AM"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <h2 className="text-5xl font-bold mt-4 text-gray-800">
        {value}
      </h2>
    </div>
  );
}

function TripCard({
  truck,
  route,
  status,
}: {
  truck: string;
  route: string;
  status: string;
}) {
  return (
    <div className="border border-gray-100 rounded-2xl p-4 hover:shadow-md transition">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg">
            {truck}
          </h3>

          <p className="text-gray-500 text-sm mt-1">
            {route}
          </p>
        </div>

        <div
          className={`text-xs px-3 py-1 rounded-full ${
            status === "Stopped"
              ? "bg-red-100 text-red-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {status}
        </div>
      </div>
    </div>
  );
}

function DeliveryRow({
  trip,
  driver,
  destination,
  status,
}: {
  trip: string;
  driver: string;
  destination: string;
  status: string;
}) {
  return (
    <tr className="border-b border-gray-100">
      <td className="py-4 font-medium">
        {trip}
      </td>

      <td>{driver}</td>

      <td>{destination}</td>

      <td>
        <span
          className={`text-xs px-3 py-1 rounded-full ${
            status === "Delivered"
              ? "bg-green-100 text-green-600"
              : status === "Pending"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-blue-100 text-blue-600"
          }`}
        >
          {status}
        </span>
      </td>
    </tr>
  );
}

function ActivityItem({
  title,
  time,
}: {
  title: string;
  time: string;
}) {
  return (
    <div className="flex justify-between items-center border-b border-gray-100 pb-4">
      <div>
        <p className="font-medium text-sm">
          {title}
        </p>
      </div>

      <p className="text-xs text-gray-400">
        {time}
      </p>
    </div>
  );
}