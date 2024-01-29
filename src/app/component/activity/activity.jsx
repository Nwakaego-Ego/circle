import Feed from "../feed/feed";
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
      title: "Twitter feminist",
    },
    {
      bgImg: "/chisom.jpeg",
      image: "/chisom.jpeg",
      name: "Chisom",
      title: "RHWL Gist ",
    },
    {
      bgImg: "/chika.jpeg",
      image: "/chika.jpeg",
      name: "Fabulous",
      title: "Fabulous Empire",
    },
  ];

  return (
    <div className="main-activity">
      <div className="activity">
        <div className="flex ">
          {activityBar.map((activity) => {
            return (
              <div key={activity.id}>
                <img
                  src={activity.image}
                  alt="image"
                  className="activity-img"
                />
                <div className="activity-wrapper">
                  {/* <p className="activity-name">{activity.name}</p> */}
                  <p className="activity-title">{activity.title}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Feed />
      </div>
    </div>
  );
};

export default activity;

//  <div
//    key={activity.id}
//    // style={{
//    //   backgroundImage: `url(${activity.bgImg})`,
//    // }}
//    // className="bgImage"
//    className="activity-wrapper"
//  >
//    <img src={activity.image} alt="image" className="activity-img" />
//    <div className="name-title">
//      <p className="activity-name">{activity.name}</p>
//      <p className="activity-title">{activity.title}</p>
//    </div>
//  </div>;
