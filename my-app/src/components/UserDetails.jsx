import React from "react";
import {
  Calendar,
  ChevronLeft,
  Edit3,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";

const UserDetails = ({ user, onBack }) => {
  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto py-6 sm:py-10">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm sm:text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Users
          </button>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 sm:px-8 py-10 sm:py-12">
            <div className="flex flex-col sm:flex-row sm:items-center">
              <div className="bg-white rounded-full p-4 sm:mr-6 mb-4 sm:mb-0 self-start">
                <User className="w-12 h-12 text-indigo-600" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {user.firstName} {user.lastName}
                </h1>
                <span
                  className={`inline-block px-3 py-1 text-sm font-semibold rounded-full shadow-sm ${
                    user.status
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {user.status ? "Active User" : "Inactive User"}
                </span>
              </div>
            </div>
          </div>

          {/* Info Blocks */}
          <div className="px-6 sm:px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Personal Information
              </h2>
              <InfoBlock
                icon={<User />}
                label="Full Name"
                value={`${user.firstName} ${user.lastName}`}
              />
              <InfoBlock
                icon={<Calendar />}
                label="Date of Birth"
                value={new Date(user.dob).toLocaleDateString()}
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Contact Information
              </h2>
              <InfoBlock
                icon={<Mail />}
                label="Email Address"
                value={user.email}
              />
              <InfoBlock
                icon={<Phone />}
                label="Phone Number"
                value={user.phone}
              />
              <InfoBlock
                icon={<MapPin />}
                label="Address"
                value={user.address}
              />
            </div>
          </div>

          {/* Footer Button */}
          <div className="mt-4 sm:mt-8 px-6 sm:px-8 pb-8">
            <button
              onClick={onBack}
              className="inline-flex items-center px-5 py-2 sm:px-6 sm:py-3 border border-gray-300 text-sm sm:text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              Back to List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoBlock = ({ icon, label, value }) => (
  <div className="flex items-start sm:items-center p-4 bg-gray-50 rounded-lg mb-4">
    <div className="mt-1 sm:mt-0 w-5 h-5 text-indigo-600 mr-3">{icon}</div>
    <div>
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="text-base sm:text-lg text-gray-900">{value}</p>
    </div>
  </div>
);

export default UserDetails;
