import {
  LayoutDashboard,
  MapPinned,
  Truck,
  Package,
  Users,
  Car,
  FileBarChart,
  Bell,
  Settings,
  Search,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0B1739] text-white p-6 hidden md:flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-12 tracking-wide">
            FLEET TRACK
          </h1>

          <nav className="space-y-3">
            <SidebarItem
              icon={<LayoutDashboard size={18} />}
              label="Dashboard"
              active
            />

            <SidebarItem
              icon={<MapPinned size={18} />}
              label="Live Tracking"
            />

            <SidebarItem
              icon={<Truck size={18} />}
              label="Trips"
            />

            <SidebarItem
              icon={<Package size={18} />}
              label="Deliveries"
            />

            <SidebarItem
              icon={<Users size={18} />}
              label="Drivers"
            />

            <SidebarItem
              icon={<Car size={18} />}
              label="Vehicles"
            />

            <SidebarItem
              icon={<FileBarChart size={18} />}
              label="Reports"
            />

            <SidebarItem
              icon={<Bell size={18} />}
              label="Alerts"
            />

            <SidebarItem
              icon={<Settings size={18} />}
              label="Settings"
            />
          </nav>
        </div>

        {/* User Card */}
        <div className="bg-white/10 p-4 rounded-2xl mt-10">
          <p className="font-semibold">John Admin</p>
          <p className="text-sm text-white/60">
            Administrator
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <section className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Dashboard
            </h1>

            <p className="text-gray-500 mt-1">
              Overview of fleet operations
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-white p-3 rounded-xl shadow-sm">
              <Search size={18} />
            </button>

            <div className="bg-white px-5 py-3 rounded-xl shadow-sm text-gray-600">
              May 20, 2025
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Vehicles"
            value="24"
            color="bg-blue-500"
          />

          <StatCard
            title="Vehicles On Trip"
            value="16"
            color="bg-green-500"
          />

          <StatCard
            title="Completed Today"
            value="8"
            color="bg-yellow-500"
          />

          <StatCard
            title="Pending Deliveries"
            value="5"
            color="bg-purple-500"
          />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Live Tracking */}
          <div className="xl:col-span-2 bg-white rounded-3xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-semibold">
                  Live Tracking
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Monitor active vehicles in real time
                </p>
              </div>

              <button className="border border-gray-200 px-4 py-2 rounded-xl hover:bg-gray-100 transition">
                View Full Map
              </button>
            </div>

            <div className="h-[450px] rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-500 text-lg">
              Interactive Map Placeholder
            </div>
          </div>

          {/* Active Trips */}
          <div className="bg-white rounded-3xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">
                Active Trips
              </h2>

              <button className="text-blue-600 text-sm">
                View All
              </button>
            </div>

            <div className="space-y-5">
              <TripItem
                code="TRK-001"
                route="Davao City → General Santos"
                status="On Trip"
              />

              <TripItem
                code="TRK-004"
                route="Davao City → Tagum City"
                status="On Trip"
              />

              <TripItem
                code="TRK-007"
                route="Davao City → Cagayan de Oro"
                status="Moving"
              />

              <TripItem
                code="TRK-009"
                route="Davao City → Cotabato City"
                status="Stopped"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SidebarItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer transition ${
        active
          ? "bg-blue-600"
          : "hover:bg-white/10 text-white/80"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

function StatCard({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: string;
}) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className="text-5xl font-bold mt-3 text-gray-800">
            {value}
          </h2>
        </div>

        <div className={`w-4 h-4 rounded-full ${color}`} />
      </div>
    </div>
  );
}

function TripItem({
  code,
  route,
  status,
}: {
  code: string;
  route: string;
  status: string;
}) {
  return (
    <div className="border-b border-gray-100 pb-5">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-lg">
            {code}
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