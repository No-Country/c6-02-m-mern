import React from 'react';
import './sectionDiscover.css';
import discoverGuy from '../../../assets/images/discoverImageGuy.png';
import discoverOffice from '../../../assets/images/discoverOffice.png';
import discoverSuccess from '../../../assets/images/discoverSuccess.png';

export const SectionDiscover = () => {
  return (
    <>
      <div className="sectionDiscover">
        <div className="container">
          <div className="wrapper-title">
            <h2 className="wrapper-title__title">
              <span className="color-yellow">Discover</span> how we help you
              generate online presence!
            </h2>
          </div>

          <div className="wrapper-discover">
            <div className="card">
              <img src={discoverGuy} className="card__img" />
              <p className="card__paragraph">
                we have a panel of experts in your area willing to take your
                business to the next level
              </p>
            </div>
            <div className="card">
              <img src={discoverOffice} className="card__img" />
              <p className="card__paragraph">
                we have a panel of experts in your area willing to take your
                business to the next level
              </p>
            </div>
            <div className="card">
              <img src={discoverSuccess} className="card__img" />
              <p className="card__paragraph">
                we have a panel of experts in your area willing to take your
                business to the next level
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
