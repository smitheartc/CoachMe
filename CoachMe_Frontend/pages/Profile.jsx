import React from "react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 text-black">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <p className="mb-6">Modify your profile information and details here.</p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <div className="flex space-x-2">
              <input type="text" placeholder="First Name" className="w-1/2 p-2 border rounded text-black" />
              <input type="text" placeholder="Last Name" className="w-1/2 p-2 border rounded text-black" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium">Email address</label>
            <input type="email" placeholder="Your email" className="w-full p-2 border rounded text-black" />
          </div>
          
          <div>
            <label className="block text-sm font-medium">Phone Number (Optional)</label>
            <input type="text" placeholder="Your phone number" className="w-full p-2 border rounded text-black" />
          </div>
          
          <div>
            <label className="block text-sm font-medium">Profile Picture</label>
            <div className="border-dashed border-2 p-6 text-center rounded cursor-pointer">
              Click to upload an image
            </div>
          </div>
          
          <div className="flex justify-end space-x-2">
            <button type="button" className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};
