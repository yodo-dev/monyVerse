import { MenuItem } from "@/types";

export const tabs = [
  { id: 1, name: "Everything" },
  { id: 2, name: "Your Activity" },
  { id: 3, name: "Near You" },
  { id: 4, name: "Unanswered" },
  { id: 5, name: "Questions" },
];

export const events = [
  { id: 1, name: "Upcoming" },
  { id: 2, name: "Nearby" },
  { id: 3, name: "Post" },
  { id: 4, name: "Yours" },
];

export const actions = [
  { id: 1, name: "Dev’s Test Space", icon: "/svgs/space-profile.svg" },
  { id: 2, name: "Aurasmash_23", icon: "/svgs/aura.svg" },
  { id: 3, name: "Energie Space", icon: "/svgs/energie.svg" },
];

export const sidebarData: MenuItem[] = [
  { id: 1, title: "Feed", icon: "/svgs/feeds.svg", path: "/dashboard/feed" },
  {
    id: 2,
    title: "Events",
    icon: "/svgs/events.svg",
    path: "/dashboard/events",
  },
  {
    id: 3,
    title: "Spaces",
    icon: "/svgs/space.svg",
    path: "/dashboard/space",
    items: [
      {
        id: 5,
        title: "Dev's Test Space",
        icon: "/svgs/space-profile.svg",
        path: "/dashboard/space",
      },
      {
        id: 6,
        title: "Energie Space",
        icon: "/svgs/energie.svg",
        path: "/dashboard/space",
      },
    ],
  },
  {
    id: 4,
    title: "Courses",
    icon: "/svgs/courses.svg",
    path: "/dashboard/courses",
  },
];
