import { useState } from "react";
const Card = ({
  titleColor,
  userName,
  email,
  phoneNumber,
  birthDate,
  role,
}) => {
  return (
    <div className="container mx-auto p-4 m-4 w-100 bg-gray-100 rounded-lg shadow-md space-y-4">
      <img
        src="https://placehold.co/300x300"
        alt="this is an image"
        className="rounded-full h-50 m-auto"
      />
      <h3
        className={`mx-auto text-lg font-bold text-center m-6 w-50 rounded-full ${titleColor}`}
      >
        {role.toUpperCase()}
      </h3>
      <p className="text-gray-600 ">
        UserName: {userName} <br />
        Email: {email} <br />
        Phone Number: {phoneNumber} <br />
        Birth Date: {birthDate}
      </p>
    </div>
  );
};

const Userscomponent = () => {
  const users = [
    {
      userName: "mohamed",
      email: "khalil@example.com",
      phoneNumber: "123-456-7890",
      birthDate: "1990-01-01",
      role: "admin",
    },
    {
      userName: "sara",
      email: "sara@example.com",
      phoneNumber: "987-654-3210",
      birthDate: "1992-05-15",
      role: "user",
    },
    {
      userName: "ahmed",
      email: "ahmed@example.com",
      phoneNumber: "555-555-5555",
      birthDate: "1995-12-10",
      role: "moderator",
    },
    {
      userName: "test",
      email: "test@example.com",
      phoneNumber: "111-111-1111",
      birthDate: "1990-01-01",
      role: "user",
    },
  ];

  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex flex-wrap justify-content">
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search by email..."
          className="border border-gray-300 rounded-lg p-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={searchHandler}
        />
      </div>
      {filteredUsers.map((user) => {
        let titleColor = "";
        switch (user.role) {
          case "admin":
            titleColor = "text-red-500";
            break;
          case "moderator":
            titleColor = "text-yellow-500";
            break;
          case "user":
            titleColor = "text-green-500";
            break;
          default:
            titleColor = "text-gray-500";
        }
        return (
          <Card
            key={user.email}
            titleColor={titleColor}
            userName={user.userName}
            email={user.email}
            phoneNumber={user.phoneNumber}
            birthDate={user.birthDate}
            role={user.role}
          />
        );
      })}
    </div>
  );
};

export default Userscomponent;
