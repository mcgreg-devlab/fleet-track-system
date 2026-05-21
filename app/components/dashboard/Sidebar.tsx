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
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-[#081028] text-white hidden lg:flex flex-col justify-between p-6 border-r border-white/5">
      <div>
        {/* Logo */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-wide">
            FLEET TRACK
          </h1>

          <p className="text-white/50 text-sm mt-2">
            Fleet Monitoring System
          </p>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
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

    </aside>
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
      className={`flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${
        active
          ? "bg-blue-600 shadow-lg shadow-blue-600/30"
          : "hover:bg-white/5 text-white/70"
      }`}
    >
      {icon}
      <span className="font-medium">
        {label}
      </span>
    </div>
  );
}