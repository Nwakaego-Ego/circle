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
      title: "Twitter coming for feminist",
    },
    {
      bgImg: "/chisom.jpeg",
      image: "/chisom.jpeg",
      name: "Chisom",
      title: "RHWL Gist catchup",
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
      <div className="flex activity">
        {activityBar.map((activity) => {
          return (
            <div
              key={activity.id}
              // style={{
              //   backgroundImage: `url(${activity.bgImg})`,
              // }}
              className="bgImage"
            >
              <img src={activity.image} alt="image" className="activity-img" />
              <div className="name-title">
                <p className="activity-name">{activity.name}</p>
                <p className="activity-title">{activity.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default activity;
