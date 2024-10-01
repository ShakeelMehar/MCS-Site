const Team = () => {
  const teamMembers = [
    {
      name: "Numan Saleem",
      role: "CEO",
      image: "/assets/team/Numan_Img2.jpg", // Path to the image
    },
    {
      name: "Abdullah Ashraf",
      role: "Senior Developer",
      image: "/assets/team/Abdullah_.jpg", // Path to the image
    },
    {
      name: "Haroon Muhammad Latif",
      role: "Back-end Developer",
      image: "/assets/team/Haroon.jpg", // Path to the image
    },
    {
      name: "Shakeel Ahmad",
      role: "Fron-end Developer",
      image: "/assets/team/Shakeel_.png", // Path to the image
    },
  ];

  return (
    <div className="container my-28 sm:mt-16 px-4">
      <h1 className="text-3xl font-semibold text-center my-16 text-violet-950 dark:text-primary">
        Meet Our Team
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-96 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold mb-2">{member.name}</h2>
              <p className="text-gray-500 mb-4">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
