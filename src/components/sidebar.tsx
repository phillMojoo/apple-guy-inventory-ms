import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  ClipboardList,
  BarChart2,
  Bell,
  FileSpreadsheet,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Inventory", href: "/inventory", icon: Package },
  { name: "Orders", href: "/orders", icon: ClipboardList },
  { name: "Reports", href: "/reports", icon: BarChart2 },
  { name: "Alerts", href: "/alerts", icon: Bell },
  { name: "Product Entry", href: "/product-entry", icon: FileSpreadsheet },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <nav className="mt-8">
        <ul className="space-y-2 px-4">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}