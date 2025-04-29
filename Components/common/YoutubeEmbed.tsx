"use client";
import React, { useState } from "react";
import Image from "next/image";

const YoutubeEmbed = ({ videoId, children }: { videoId: string; children: React.ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadVideo = () => {
    setIsLoaded(true);
  };

  const getYouTubeThumbnail = (videoId: string) => `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="my-6 w-full overflow-visible relative">
      {!isLoaded ? (
        <div
          className="relative w-full h-[60vh] cursor-pointer rounded-lg bg-gray-800 flex items-center justify-center"
          onClick={handleLoadVideo}
        >
          <Image
            src={getYouTubeThumbnail(videoId)}
            alt={children?.toString() || "YouTube thumbnail"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-lg"
            priority={false}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8//F/PQAJIANdK2y6XQAAAABJRU5ErkJggg=="
          />
          <div className="absolute  w-24 h-16 bg-red-600 rounded-xl flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
            <svg className="w-8 h-8 text-white " fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={children?.toString() || "YouTube video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-[60vh] rounded-lg"
        />
      )}
    </div>
  );
};

export default YoutubeEmbed;