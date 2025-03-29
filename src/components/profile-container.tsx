import { useAuth, UserButton } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { memo } from "react";

export const ProfileContainer = memo(() => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <div className="flex items-center">
        <Loader className="w-4 h-4 animate-spin text-emerald-500" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-6">
      {isSignedIn ? (
        <UserButton afterSignOutUrl="/" aria-label="User Profile" />
      ) : (
        <Link to="/signin">
          <Button size="sm">Get Started</Button>
        </Link>
      )}
    </div>
  );
});
