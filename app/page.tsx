"use client";

import Sidebar from "./components/dashboard/Sidebar";

import {
  Bell,
  Search,
  Truck,
  Package,
  CheckCircle,
  Clock3,
} from "lucide-react";

import CountUp from "react-countup";

import dynamic from "next/dynamic";

const MapView = dynamic(
  () => import("./components/dashboard/MapView"),
  {
    ssr: false,
  }
);

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const tripData = [
  { day: "Mon", trips: 12 },
  { day: "Tue", trips: 19 },
  { day: "Wed", trips: 15 },
  { day: "Thu", trips: 22 },
  { day: "Fri", trips: 28 },
  { day: "Sat", trips: 18 },
  { day: "Sun", trips: 10 },
];

const deliveryData = [
  { name: "Completed", value: 65 },
  { name: "Pending", value: 20 },
  { name: "Delayed", value: 15 },
];

const COLORS = ["#2563eb", "#16a34a", "#dc2626"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f7fb] flex">
      <Sidebar />

      <section className="flex-1 p-8">
        {/* Navbar */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Dashboard
            </h1>

            <p className="text-gray-700 mt-2 font-medium">
              Overview of fleet operations
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="bg-white px-4 py-3 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-3 w-[260px] transition-all duration-300 hover:shadow-md">
              <Search size={18} className="text-gray-600" />

              <input
                type="text"
                placeholder="Search..."
                className="outline-none bg-transparent text-sm w-full text-gray-700 placeholder:text-gray-400"
              />
            </div>

            {/* Notification */}
            <button className="w-12 h-12 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Bell size={18} />
            </button>

            {/* Profile */}
            <div className="bg-white px-4 py-2 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                MG
              </div>

              <div>
                <p className="text-sm font-bold text-gray-800">
                  MG Labs
                </p>

                <p className="text-xs text-gray-700">
                  Administrator
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Vehicles"
            value="24"
            icon={<Truck size={20} />}
            color="bg-blue-100 text-blue-600"
            growth="+12%"
          />

          <StatCard
            title="Vehicles On Trip"
            value="16"
            icon={<Package size={20} />}
            color="bg-green-100 text-green-600"
            growth="+8%"
          />

          <StatCard
            title="Completed Today"
            value="8"
            icon={<CheckCircle size={20} />}
            color="bg-purple-100 text-purple-600"
            growth="+18%"
          />

          <StatCard
            title="Pending Deliveries"
            value="5"
            icon={<Clock3 size={20} />}
            color="bg-yellow-100 text-yellow-600"
            growth="-2%"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          {/* Weekly Trips */}
          <div className="xl:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Weekly Trips Analytics
              </h2>

              <p className="text-gray-700 text-sm mt-1 font-medium">
                Trips completed over the week
              </p>
            </div>

            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={tripData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="trips"
                    fill="#2563eb"
                    radius={[10, 10, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Delivery Status */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Delivery Status
              </h2>

              <p className="text-gray-700 text-sm mt-1 font-medium">
                Overall delivery performance
              </p>
            </div>

            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={deliveryData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    label
                  >
                    {deliveryData.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Live Map */}
          <div className="xl:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Live Fleet Tracking
                </h2>

                <p className="text-gray-700 text-sm mt-1 font-medium">
                  Realtime operational vehicle overview
                </p>
              </div>

              <button className="border border-gray-300 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all duration-300 text-gray-700 font-medium hover:shadow-md">
                Expand Map
              </button>
            </div>

            {/* REAL INTERACTIVE MAP */}
            <div className="h-[500px] rounded-3xl overflow-hidden border border-gray-200">
              <MapView />
            </div>
          </div>

          {/* Active Trips */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Active Trips
              </h2>

              <button className="text-blue-700 text-sm font-medium hover:underline">
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
          {/* Deliveries */}
          <div className="xl:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Recent Deliveries
              </h2>

              <button className="text-blue-700 text-sm font-medium hover:underline">
                View All
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-700 text-sm border-b font-semibold">
                    <th className="pb-4">Trip ID</th>
                    <th className="pb-4">Driver</th>
                    <th className="pb-4">Destination</th>
                    <th className="pb-4">Status</th>
                  </tr>
                </thead>

                <tbody className="text-sm text-gray-700">
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

          {/* Activity */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Recent Activity
              </h2>

              <button className="text-blue-700 text-sm font-medium hover:underline">
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

function StatCard({
  title,
  value,
  icon,
  color,
  growth,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  growth: string;
}) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-700 text-sm font-medium">
            {title}
          </p>

          <h2 className="text-5xl font-bold mt-4 text-gray-800">
            <CountUp
              end={Number(value)}
              duration={2}
            />
          </h2>

          <p className="text-sm text-green-700 mt-3 font-medium">
            {growth} this week
          </p>
        </div>

        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center ${color}`}
        >
          {icon}
        </div>
      </div>
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
    <div className="border border-gray-200 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg text-gray-800">
            {truck}
          </h3>

          <p className="text-gray-700 text-sm mt-1">
            {route}
          </p>
        </div>

        <div
          className={`text-xs px-3 py-1 rounded-full ${
            status === "Stopped"
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
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
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-all duration-300">
      <td className="py-4 font-medium text-gray-800">{trip}</td>
      <td className="text-gray-700">{driver}</td>
      <td className="text-gray-700">{destination}</td>

      <td>
        <span
          className={`text-xs px-3 py-1 rounded-full ${
            status === "Delivered"
              ? "bg-green-100 text-green-700"
              : status === "Pending"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-blue-100 text-blue-700"
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
    <div className="flex justify-between items-center border-b border-gray-100 pb-4 transition-all duration-300 hover:translate-x-1">
      <p className="font-medium text-sm text-gray-800">
        {title}
      </p>

      <p className="text-xs text-gray-700 font-medium">
        {time}
      </p>
    </div>
  );
}