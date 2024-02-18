import Profile from "./component/profile";

const profileImg = () => {
  const imgCollection = () => {
    [
      {
        image: "/bryan.jpeg",
        name: "bryan",
      },
      {
        image: "/ego.jpeg",
        name: ego,
      },
      {
        image: "/chisom.jpeg",
        name: "chisom",
      },
      {
        image: "/chika.jpeg",
        name: "chika",
      },
    ];
  };

  return <Profile imgCollection={imgCollection()} />;
};

export default profileImg;
