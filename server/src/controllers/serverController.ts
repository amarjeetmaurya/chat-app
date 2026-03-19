import type { Request, Response, NextFunction } from "express";

const dummyRooms = [
  {
    id: 1,
    name: "General Chat",
    members: 234,
    online: 45,
    description: "Main hangout spot for everyone",
    emoji: "💬",
    color: "#667eea",
    link: "/uuuu",
  },
  {
    id: 2,
    name: "Gaming Hub",
    members: 189,
    online: 32,
    description: "Discuss your favorite games",
    emoji: "🎮",
    color: "#f093fb",
  },
  {
    id: 3,
    name: "Tech Talk",
    members: 156,
    online: 28,
    description: "All things technology",
    emoji: "💻",
    color: "#4facfe",
  },
  {
    id: 4,
    name: "Music Lovers",
    members: 201,
    online: 38,
    description: "Share and discover music",
    emoji: "🎵",
    color: "#43e97b",
  },
  {
    id: 5,
    name: "Movie Night",
    members: 143,
    online: 22,
    description: "Movies, shows, and reviews",
    emoji: "🎬",
    color: "#fa709a",
  },
  {
    id: 6,
    name: "Food & Recipes",
    members: 178,
    online: 31,
    description: "Cooking and food adventures",
    emoji: "🍕",
    color: "#fee140",
  },
];

export const getServers = (req: Request, res: Response) => {
    res.json(dummyRooms)
};

export const joinServer = (req: Request, res: Response) => {
    res.json({message: "Request Recieved"});
};
