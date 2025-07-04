import { NavLink } from "react-router-dom";
import { Home, Search, Plus, Info, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/properties", icon: Search, label: "Properties" },
  { to: "/list-property", icon: Plus, label: "List" },
  { to: "/about", icon: Info, label: "About" },
  { to: "/contact", icon: Phone, label: "Contact" },
];

export function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border/50 px-4 py-2 z-50">
      <div className="flex items-center justify-around">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200",
                "text-muted-foreground hover:text-primary",
                isActive && "text-primary bg-primary/10"
              )
            }
          >
            <Icon className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}