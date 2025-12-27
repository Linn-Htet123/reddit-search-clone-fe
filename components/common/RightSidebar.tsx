import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const RightSidebar = () => {
  // Mock data matching your screenshot
  const communities = [
    {
      name: "r/Marvel",
      description:
        "This is a subreddit dedicated to Marvel Comics, its cinematic universe...",
      members: "3.6M",
      online: "385",
      icon: "https://styles.redditmedia.com/t5_2skhu/styles/communityIcon_w5s0a8019o881.png", // Replace with real or placeholder
      fallback: "M",
      color: "bg-green-600",
    },
    {
      name: "r/marvelstudios",
      description:
        "This subreddit is dedicated to discussing the Marvel Cinematic Universe...",
      members: "4.7M",
      online: "532",
      icon: "",
      fallback: "MS",
      color: "bg-slate-900",
    },
    {
      name: "r/MarvelStudiosSpoilers",
      description: "Production Leaks, Spoilers, & News from the MCU...",
      members: "893K",
      online: "353",
      icon: "",
      fallback: "SP",
      color: "bg-blue-600",
    },
    {
      name: "r/marvelmemes",
      description: "Welcome to r/marvelmemes: The best place for memes...",
      members: "4.3M",
      online: "180",
      icon: "",
      fallback: "MM",
      color: "bg-yellow-600",
    },
    {
      name: "r/marvelcomics",
      description: "For the discussion of Marvel Comics, past and present...",
      members: "115K",
      online: "69",
      icon: "",
      fallback: "MC",
      color: "bg-red-600",
    },
  ];

  return (
    // Hidden on mobile/tablet, visible on large screens (lg)
    <aside className="hidden lg:flex flex-col w-[312px] sticky top-0 h-screen overflow-y-auto pt-6 pr-6 pl-4 pb-10 gap-4">
      {/* --- COMMUNITIES CARD --- */}
      <Card className="border-none shadow-sm bg-gray-50/50 hover:bg-gray-50 transition-colors">
        <CardHeader className="pb-2 pt-4 px-4">
          <CardTitle className="text-sm font-bold text-gray-500 uppercase tracking-wider">
            Communities
          </CardTitle>
        </CardHeader>

        <CardContent className="px-2 pb-2">
          <div className="flex flex-col">
            {communities.map((community, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-200/50 cursor-pointer transition-colors"
              >
                {/* Icon */}
                <Avatar className="w-9 h-9 border border-gray-100 mt-1">
                  <AvatarImage src={community.icon} alt={community.name} />
                  <AvatarFallback
                    className={`text-white text-[10px] font-bold ${community.color}`}
                  >
                    {community.fallback}
                  </AvatarFallback>
                </Avatar>

                {/* Text Content */}
                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-gray-900 hover:underline">
                      {community.name}
                    </span>
                  </div>

                  {/* Truncated Description */}
                  <p className="text-xs text-gray-500 line-clamp-2 leading-snug mb-1">
                    {community.description}
                  </p>

                  {/* Metadata (Members • Online) */}
                  <div className="text-[11px] text-gray-400 font-medium">
                    {community.members} members · {community.online} online
                  </div>
                </div>
              </div>
            ))}

            {/* "See more" Link */}
            <Button
              variant="ghost"
              className="mt-2 w-full text-xs font-bold text-blue-600 hover:text-blue-700 hover:bg-blue-50 justify-start h-8 px-2"
            >
              See more communities
            </Button>
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* --- PEOPLE SECTION (Placeholder based on bottom of screenshot) --- */}
      <div className="px-2">
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider px-2 mb-2">
          People
        </h3>
        {/* Example placeholder person */}
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <Avatar className="w-9 h-9">
            <AvatarFallback className="bg-orange-500 text-white font-bold">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-bold">u/JohnDoe_Dev</span>
            <span className="text-xs text-gray-500">Full Stack Developer</span>
          </div>
          <Button
            size="sm"
            variant="outline"
            className="ml-auto h-7 text-xs rounded-full px-3"
          >
            Follow
          </Button>
        </div>
      </div>

      {/* Footer Links (Standard Sidebar Footer) */}
      <div className="px-4 py-2 text-[11px] text-gray-500 leading-relaxed border-t mt-auto">
        <div className="flex flex-wrap gap-x-2 gap-y-1 mb-2">
          <span className="cursor-pointer hover:underline">User Agreement</span>
          <span className="cursor-pointer hover:underline">Privacy Policy</span>
        </div>
        <p>© 2025 Reddit, Inc. All rights reserved.</p>
      </div>
    </aside>
  );
};

export default RightSidebar;
