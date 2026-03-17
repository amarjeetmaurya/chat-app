import { useEffect, useState } from "react";
import RoomCard from "../components/RoomCard";


const BASE_URL = import.meta.env.VITE_BASE_URL;
interface Room {
  id: number;
  name: string;
  description: string;
  emoji: string;
  color: string;
  online: number;
  members: number;
}

  
const Explore = () => {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/server`);
        const data = await res.json();
        console.log(data)
        setRooms(data);
      } catch (err) {
        console.error("Failed to fetch servers:", err);
      }
    };

    fetchRooms();
  }, []);
  return (
    <div>
      {/* Welcome Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
          Discover Rooms
        </h2>
        <p className="text-lg text-gray-600">
          Join a conversation and connect with others
        </p>
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
