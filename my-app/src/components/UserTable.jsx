// 📁 src/components/UserTable.jsx
import React, { useState } from "react";
import { Edit3, Eye, Save, Calendar } from "lucide-react";

const UserTable = ({ users, editingUserId, onEdit, onSave, onView }) => {
  const [editFormData, setEditFormData] = useState({});

  const handleEdit = (user) => {
    setEditFormData(user);
    onEdit(user.id);
  };

  const handleInputChange = (field, value) => {
    setEditFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = (userId) => {
    onSave({ id: userId, ...editFormData });
  };

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-6">
      {/* Header */}
      <div className="px-4 sm:px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
          User List
        </h2>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <tr>
              {[
                "First Name",
                "Last Name",
                "Status",
                "Date of Birth",
                "Actions",
              ].map((head) => (
                <th
                  key={head}
                  className={`px-4 py-3 text-left font-medium uppercase tracking-wider ${
                    head === "Actions" ? "text-right" : ""
                  }`}
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {users.map((user) => {
              const isEditing = editingUserId === user.id;
              return (
                <tr key={user.id} className="hover:bg-gray-50">
                  {/* First Name */}
                  <td className="px-4 py-3">
                    {isEditing ? (
                      <input
                        type="text"
                        value={editFormData.firstName || ""}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        className="w-full px-2 py-1 border rounded-md text-sm"
                      />
                    ) : (
                      <span className="font-medium">{user.firstName}</span>
                    )}
                  </td>

                  {/* Last Name */}
                  <td className="px-4 py-3">
                    {isEditing ? (
                      <input
                        type="text"
                        value={editFormData.lastName || ""}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        className="w-full px-2 py-1 border rounded-md text-sm"
                      />
                    ) : (
                      <span className="font-medium">{user.lastName}</span>
                    )}
                  </td>

                  {/* Status */}
                  <td className="px-4 py-3">
                    {isEditing ? (
                      <label className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={editFormData.status || false}
                          onChange={(e) =>
                            handleInputChange("status", e.target.checked)
                          }
                          className="accent-indigo-600"
                        />
                        Active
                      </label>
                    ) : (
                      <span
                        className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
                          user.status
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {user.status ? "Active" : "Inactive"}
                      </span>
                    )}
                  </td>

                  {/* Date of Birth */}
                  <td className="px-4 py-3">
                    {isEditing ? (
                      <input
                        type="date"
                        value={editFormData.dob || ""}
                        onChange={(e) =>
                          handleInputChange("dob", e.target.value)
                        }
                        className="w-full px-2 py-1 border rounded-md text-sm"
                      />
                    ) : (
                      <div className="flex items-center text-gray-700">
                        <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                        {new Date(user.dob).toLocaleDateString()}
                      </div>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end flex-wrap gap-2">
                      {isEditing ? (
                        <button
                          onClick={() => handleSave(user.id)}
                          className="inline-flex items-center px-3 py-1 text-white bg-green-600 hover:bg-green-700 rounded-md"
                        >
                          <Save className="w-4 h-4 mr-1" /> Save
                        </button>
                      ) : (
                        <>
                          <button
                            onClick={() => handleEdit(user)}
                            className="inline-flex items-center px-3 py-1 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
                          >
                            <Edit3 className="w-4 h-4 mr-1" /> Edit
                          </button>
                          <button
                            onClick={() => onView(user)}
                            className="inline-flex items-center px-3 py-1 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                          >
                            <Eye className="w-4 h-4 mr-1" /> View
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
