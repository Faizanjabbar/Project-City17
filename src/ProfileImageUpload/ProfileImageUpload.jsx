import React, { useState } from "react";

const ProfileImageUpload = () => {
  const [image, setImage] = useState(null);

  return (
    <div className="flex justify-left items-center  bg-gray-900 rounded-full">
      <div className="relative w-24 h-24">
        {/* Profile Image */}
        <img
          src={
             image 
            // ||
            // "https://via.placeholder.com/300x300.png?text=Profile" // better square placeholder
          }
          alt="Profile"
          className="w-full h-full text-center object-cover rounded-full border-4 border-gray-700"
        />

        {/* Edit Overlay */}
        <label
          htmlFor="upload"
          className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-sm text-center py-1 rounded-b-full cursor-pointer"
        >
          Edit
        </label>

        {/* Hidden Input */}
        <input
          id="upload"
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              setImage(URL.createObjectURL(file));
            }
          }}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ProfileImageUpload;
