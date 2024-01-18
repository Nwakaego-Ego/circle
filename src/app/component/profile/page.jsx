import React from "react";
import Image from "next/image";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <div className="container-wrapper">
        <div className="profile-container">
          <div className="profile-main">
            <Image
              src="/nwakaego.jpeg"
              alt="Note Image"
              width={300}
              height={200}
              layout="fit"
              objectFit="cover"
              className=" rounded-full w-60 h-60  "
            />
            <p className="profile-profile">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores ullam, mollitia similique quas, totam, quia ab
              excepturi repellat nihil consectetur possimus quae a corporis id
              eius cumque ducimus maiores quidem.
            </p>
            <div className="flex profile-buttons">
              <button className="profile-memory">Memory</button>
              <button className="profile-bookmark">Bookmark</button>
              <button className="profile-request-code">Request code</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
