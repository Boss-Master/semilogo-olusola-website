import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const { setTheme } = useTheme();

  // Function to scroll to the Hero section
  const scrollToHero = () => {
    const heroSection = document.querySelector("#home");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to scroll to the About section
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            {/* Clicking Semilogo scrolls to About section */}
            <button onClick={scrollToAbout} className="text-xl font-semibold">
              Semilogo
            </button>
            <nav className="flex space-x-8">
              {/* Clicking Home scrolls to Hero section */}
              <button 
                onClick={scrollToHero} 
                className="text-sm font-medium hover:text-primary cursor-pointer"
              >
                Home
              </button>
              <a href="#projects" className="text-sm font-medium hover:text-primary">
                Projects
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-primary">
                Contact
              </a>
              <a 
                href={encodeURI("/Semilogo OGUNGBURE_Electrical.pdf")}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-medium hover:text-primary"
              >
                CV
              </a>
            </nav>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
