import React from "react";
import "./Gallery.css";

export default function App({content}) {
  console.log(content);
  return (
    
    <div id="gallery" className="image-gallery">
      <h2>Gallery</h2>
      <div className="image-group">
        {content?.map((image) => (
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="../src/images/livingroom.jpeg">
                <img src={image?.src} alt="" />
              </a>
              <div className="desc">{image?.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="clearfix"></div>
    </div>
  );
}
