import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export default function SocialSidebar() {
  return (
    <div className="fixed left-4 top-1/3 z-50 flex flex-col gap-4 text-gray-800 dark:text-white">
      <a href="#" className="hover:text-yellow-500 transition"><Facebook /></a>
      <a href="#" className="hover:text-yellow-500 transition"><Instagram /></a>
      <a href="#" className="hover:text-yellow-500 transition"><Twitter /></a>
      <a href="#" className="hover:text-yellow-500 transition"><Youtube /></a>
    </div>
  );
}
