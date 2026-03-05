import { useState } from "react";

import photo1 from "../assets/photos/photo1.jpeg";
import photo2 from "../assets/photos/photo2.jpeg";
import photo3 from "../assets/photos/photo3.jpeg";
import photo4 from "../assets/photos/photo4.jpeg";
import photo5 from "../assets/photos/photo5.jpeg";
import photo6 from "../assets/photos/photo6.jpeg";
import photo7 from "../assets/photos/photo7.jpeg";
import photo8 from "../assets/photos/photo8.jpeg";
import photo9 from "../assets/photos/photo9.jpeg";
import photo10 from "../assets/photos/photo10.jpeg";
import photo11 from "../assets/photos/photo11.jpeg";
import photo12 from "../assets/photos/photo12.jpeg";
import photo13 from "../assets/photos/photo13.jpeg";
import photo14 from "../assets/photos/photo14.jpeg";

function GallerySection() {

  const photos = [
    photo1, photo2, photo3, photo4,
    photo5, photo6, photo7, photo8,
    photo9, photo10, photo11, photo12,
    photo13, photo14
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="gallery-section">

      <h2 className="gallery-title">
        Moments of Priyanka ❤️
      </h2>

      <div className="polaroid-wall">

        {photos.map((photo, index) => (
          <div key={index} className="polaroid">

            <img
              src={photo}
              alt="Priyanka memory"
              onClick={() => setSelectedPhoto(photo)}
            />

          </div>
        ))}

      </div>

      {selectedPhoto && (
        <div
          className="photo-modal"
          onClick={() => setSelectedPhoto(null)}
        >
          <img src={selectedPhoto} alt="zoomed" />
        </div>
      )}

    </section>
  );
}

export default GallerySection;