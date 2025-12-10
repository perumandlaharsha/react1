import React, { useState } from "react";

export default function EditSidebar({ user, onClose, onSave }) {
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    gender: user.gender,
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function submitForm() {
    onSave(formData);
    onClose();
  }

  return (
    <div className="fixed top-20 right-0 h-full w-80 bg-white shadow-xl p-5 border-l">
      <h2 className="text-xl font-bold mb-4">Edit User</h2>

      <input
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
        placeholder="First Name"
      />
      <input
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
        placeholder="Last Name"
      />

      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
        placeholder="Email"
      />

      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <div className="flex justify-between mt-4">
        <button
          onClick={submitForm}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Update
        </button>

        <button
          onClick={onClose}
          className="bg-gray-400 text-white px-4 py-2 rounded-md"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
