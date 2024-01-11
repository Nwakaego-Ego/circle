import "./activity.css";

const activity = () => {
  const activityBar = [
    {
      bgImg: "/bryan.jpeg",
      image: "/bryan.jpeg",
      name: "Bryan",
      title: "Kiddies",
    },
    {
      bgImg: "/nwakaego.jpeg",
      image: "/ego.jpeg",
      name: "Nwakaego",
      title: "Junior dev club",
    },
    {
      bgImg: "/chisom.jpeg",
      image: "/chisom.jpeg",
      name: "Chisom",
      title: "Chisom Hair",
    },
    {
      bgImg: "/chika.jpeg",
      image: "/chika.jpeg",
      name: "Fabulous",
      title: "Fabulous Empire",
    },
  ];

  const background = "./ego.jpeg";
  return (
    <>
      <div className="flex">
        {activityBar.map((activity) => {
          return (
            <div
              key={activity.id}
              style={{
                backgroundImage: `url(${activity.bgImg})`,
              }}
              className="bgImage"
            >
              <img src={activity.image} alt="image" className="activity-img" />
              <p>{activity.name}</p>
              <p>{activity.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default activity;
