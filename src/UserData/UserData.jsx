import axios from "axios";
import { useEffect, useState } from "react";
import EditSidebar from "./EditSidebar";

export const UserData = () => {
  const [user, setUser] = useState([]);
  const [editUser, setEditUser] = useState(null); 
  const [editIndex, setEditIndex] = useState(null); 

  const handleDelete = (id) => {
    setUser(user.filter((u) => u.id !== id));
  };

  useEffect(() => {
    async function dataApi() {
      let { data } = await axios.get("https://dummyjson.com/users");
      setUser(data.users);
    }
    dataApi();
  }, []);

  function handleSave(updatedData) {
    const updatedUsers = [...user];
    updatedUsers[editIndex] = {
      ...updatedUsers[editIndex],
      ...updatedData,
    };

    setUser(updatedUsers);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 mt-4 text-center">User List</h1>

      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full border border-gray-300 bg-white">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-2 border-r">S.No</th>
              <th className="px-4 py-2 border-r">Full Name</th>
              <th className="px-4 py-2 border-r">Email</th>
              <th className="px-4 py-2 border-r">Gender</th>
              <th className="px-4 py-2 border-r text-center">Edit</th>
              <th className="px-4 py-2 text-center">Delete</th>
            </tr>
          </thead>

          <tbody>
            {user.map((item, index) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 border-r">{index + 1}</td>

                <td className="px-4 py-2 border-r">
                  {item.firstName} {item.lastName}
                </td>

                <td className="px-4 py-2 border-r">{item.email}</td>

                <td className="px-4 py-2 border-r capitalize">{item.gender}</td>

                <td className="px-4 py-2 text-center border-r">
                  <button
                    onClick={() => {
                      setEditUser(item);
                      setEditIndex(index);
                    }}
                    className="bg-blue-600 text-white px-3 py-1 rounded-md"
                  >
                    Edit
                  </button>
                </td>
                <td className="px-4 py-2 text-center">
                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded-md"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editUser && (
        <EditSidebar
          user={editUser}
          onClose={() => setEditUser(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};
