import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavigationRoutes } from "./navigation-route";
import { useAuth } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

export const ToggleContainer = () => {
  const { userId } = useAuth();

  // Debugging step: Check if userId is available
  console.log("User ID:", userId);

  return (
    <Sheet>
      <SheetTrigger className="block md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle />
        </SheetHeader>

        <nav className="gap-6 flex flex-col items-start">
          <NavigationRoutes isMobile />

          {userId && (
            <NavLink
              to={"/generate"}
              className={({ isActive }) =>
                cn(
                  "text-base text-neutral-600 bg-red-300 border border-black", // Added for visibility testing
                  isActive && "text-neutral-900 font-semibold"
                )
              }
            >
              Take An Interview
            </NavLink>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
