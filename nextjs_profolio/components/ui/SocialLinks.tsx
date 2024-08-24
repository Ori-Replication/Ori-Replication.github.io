import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaBilibili } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 left-10">
      <ul className="flex flex-col space-y-4">
        <li>
          <a
            href="https://github.com/Ori-Replication"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
          >
            <FaGithub size={20} />
          </a>
        </li>
        <li>
          <a
            href="https://space.bilibili.com/88778064"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
          >
            <FaBilibili size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
