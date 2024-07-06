import React from 'react';
import ProfilePhoto from '../assets/images/profile_photo.jpg';
import Container from '../layouts/Container';

const Intro = () => {
  return (
    <div className="h-screen min-h-[30rem]">
      <Container>
        <div className="w-max overflow-hidden rounded-full">
          {/* <img src={ProfilePhoto} alt="Profile_photo" /> */}
        </div>
      </Container>
    </div>
  );
};

export default Intro;
