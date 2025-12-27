import React from "react";
import {
  Home,
  ArrowUpRight,
  Telescope, // For "Explore"
  BarChart2, // For "All"
  Plus,
  Gamepad2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const LeftSidebar = () => {
  return (
    // Fixed width, full height, sticky to top
    <aside className="hidden md:flex flex-col w-[270px] h-screen sticky top-0 border-r border-gray-200 bg-white flex-shrink-0">
      <ScrollArea className="h-full px-4 py-4">
        {/* --- MAIN NAVIGATION --- */}
        <div className="space-y-1 mb-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-base font-normal h-12 px-3"
          >
            <Home className="mr-3 h-6 w-6" />
            Home
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-base font-normal h-12 px-3"
          >
            <ArrowUpRight className="mr-3 h-6 w-6" />
            Popular
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-base font-normal h-12 px-3"
          >
            <Telescope className="mr-3 h-6 w-6" />
            Explore
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-base font-normal h-12 px-3"
          >
            <BarChart2 className="mr-3 h-6 w-6" />
            All
          </Button>
        </div>

        <Separator className="my-2" />

        {/* --- ACTIONS --- */}
        <div className="mb-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-base font-normal h-12 px-3"
          >
            <Plus className="mr-3 h-6 w-6" />
            Start a community
          </Button>
        </div>

        <Separator className="my-2" />

        {/* --- ACCORDION SECTIONS --- */}
        <Accordion
          type="multiple"
          defaultValue={["games", "recent", "custom"]}
          className="w-full"
        >
          {/* 1. GAMES SECTION */}
          <AccordionItem value="games" className="border-b-0">
            <AccordionTrigger className="uppercase text-xs font-bold text-muted-foreground hover:no-underline py-3 px-3">
              Games on Reddit
            </AccordionTrigger>
            <AccordionContent className="pb-2">
              <div className="space-y-1">
                {/* Featured Game Card (Pocket Grids) */}
                <div className="bg-yellow-100 hover:bg-yellow-200 cursor-pointer rounded-lg p-2 flex items-center gap-3 mx-2 mb-2 transition-colors">
                  <div className="bg-black text-white p-1.5 rounded-md">
                    <Gamepad2 className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">Pocket Grids</span>
                    <span className="text-[10px] text-gray-600">
                      1.8M players
                    </span>
                  </div>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 rounded-full ml-auto">
                    NEW
                  </span>
                </div>

                {/* Other Games */}
                <Button
                  variant="ghost"
                  className="w-full justify-start h-10 px-3 font-normal text-sm"
                >
                  <span className="mr-3 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs">
                    🐮
                  </span>
                  Farm Merge Valley
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start h-10 px-3 font-normal text-sm"
                >
                  <span className="mr-3 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-xs">
                    🪐
                  </span>
                  Quiz Planet
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* 2. CUSTOM FEEDS */}
          <AccordionItem value="custom" className="border-b-0">
            <AccordionTrigger className="uppercase text-xs font-bold text-muted-foreground hover:no-underline py-3 px-3">
              Custom Feeds
            </AccordionTrigger>
            <AccordionContent className="pb-2">
              <Button
                variant="ghost"
                className="w-full justify-start h-10 px-3 text-sm font-normal text-muted-foreground"
              >
                <Plus className="mr-3 h-5 w-5" />
                Create Custom Feed
              </Button>
            </AccordionContent>
          </AccordionItem>

          {/* 3. RECENT */}
          <AccordionItem value="recent" className="border-b-0">
            <AccordionTrigger className="uppercase text-xs font-bold text-muted-foreground hover:no-underline py-3 px-3">
              Recent
            </AccordionTrigger>
            <AccordionContent className="pb-2">
              <div className="space-y-1">
                <Button
                  variant="ghost"
                  className="w-full justify-start h-10 px-3 font-normal text-sm"
                >
                  <Avatar className="h-6 w-6 mr-3">
                    <AvatarImage src="https://styles.redditmedia.com/t5_2qkbz/styles/communityIcon_oxp999y7q9531.png" />
                    <AvatarFallback className="bg-green-200 text-[10px]">
                      R
                    </AvatarFallback>
                  </Avatar>
                  r/resumes
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start h-10 px-3 font-normal text-sm"
                >
                  <Avatar className="h-6 w-6 mr-3">
                    <AvatarFallback className="bg-orange-200 text-[10px]">
                      G
                    </AvatarFallback>
                  </Avatar>
                  r/reactiongifs
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start h-10 px-3 font-normal text-sm"
                >
                  <Avatar className="h-6 w-6 mr-3">
                    <AvatarFallback className="bg-blue-200 text-[10px]">
                      W
                    </AvatarFallback>
                  </Avatar>
                  r/webdev
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ScrollArea>
    </aside>
  );
};

export default LeftSidebar;
