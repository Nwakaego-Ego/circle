import Feed from "../feed/feed";
import "./activity.css";

const activity = () => {
  const activityBar = [
    {
      bgImg: "/bryan.jpeg",
      image: "/catchup.png",
      name: "Bryan",
      title: "Catch up",
    },
    {
      bgImg: "/witch.jpeg",
      image: "/witch.jpeg",
      name: "Nwakaego",
      title: "Feminist",
    },
    {
      bgImg: "/bookclub.png",
      image: "/bookclub.png",
      name: "Chisom",
      title: "Book Club",
    },
    {
      bgImg: "/Football.jpg",
      image: "/Football.jpg",
      name: "Fabulous",
      title: "Football Bant",
    },
  ];

  return (
    <div className="main-activity">
      <div className="activity">
        <div className="flex ">
          {activityBar.map((activity) => {
            return (
              <div key={activity.id} className="activity-wrapper">
                <img
                  src={activity.image}
                  alt="image"
                  className="activity-img"
                />
                <div className="">
                  {/* <p className="activity-name">{activity.name}</p> */}
                  <div className="activity-title">{activity.title}</div>
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
