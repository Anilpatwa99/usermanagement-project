// 📁 src/pages/UserManagement.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../redux/UserSlice";

import UserTable from "../components/UserTable";
import UserDetails from "../components/UserDetails";
import Pagination from "../components/Pagination";

const UserManagement = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const [editingUserId, setEditingUserId] = useState(null);
  const [viewingUser, setViewingUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const handleEdit = (userId) => {
    setEditingUserId(userId);
  };

  const handleSave = (updatedUser) => {
    dispatch(updateUser(updatedUser));
    setEditingUserId(null);
  };

  const handleView = (user) => {
    setViewingUser(user);
  };

  const handleBack = () => {
    setViewingUser(null);
  };

  const totalUsers = users.length;
  const activeUsers = users.filter((u) => u.status).length;
  const inactiveUsers = totalUsers - activeUsers;

  const paginatedUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-6 px-4 sm:py-10 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {viewingUser ? (
          <UserDetails
            user={viewingUser}
            onBack={handleBack}
            onEdit={handleEdit}
          />
        ) : (
          <>
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                User Management System
              </h1>
              <p className="text-base sm:text-lg text-gray-600">
                Manage users with ease and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <StatCard label="Total Users" value={totalUsers} color="indigo" />
              <StatCard
                label="Active Users"
                value={activeUsers}
                color="green"
              />
              <StatCard
                label="Inactive Users"
                value={inactiveUsers}
                color="red"
              />
            </div>

            <UserTable
              users={paginatedUsers}
              editingUserId={editingUserId}
              onEdit={handleEdit}
              onSave={handleSave}
              onView={handleView}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
              onItemsPerPageChange={(val) => {
                setItemsPerPage(val);
                setCurrentPage(1);
              }}
            />

            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(users.length / itemsPerPage)}
              itemsPerPage={itemsPerPage}
              totalItems={users.length}
              onPageChange={(page) => setCurrentPage(page)}
              onItemsPerPageChange={(val) => {
                setItemsPerPage(val);
                setCurrentPage(1);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ label, value, color }) => {
  const borderColor = {
    indigo: "border-indigo-500",
    green: "border-green-500",
    red: "border-red-500",
  }[color];

  const iconBg = {
    green: "bg-green-100",
    red: "bg-red-100",
  }[color];

  const dotColor = {
    green: "bg-green-500",
    red: "bg-red-500",
  }[color];

  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${borderColor}`}
    >
      <div className="flex items-center">
        {color === "indigo" ? (
          <svg
            className="w-8 h-8 text-indigo-600 mr-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 17.804A4 4 0 016 15h12a4 4 0 01.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        ) : (
          <div
            className={`w-8 h-8 ${iconBg} rounded-full flex items-center justify-center mr-3`}
          >
            <div className={`w-3 h-3 ${dotColor} rounded-full`}></div>
          </div>
        )}
        <div>
          <p className="text-sm font-medium text-gray-500">{label}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
