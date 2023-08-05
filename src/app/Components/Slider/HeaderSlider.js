import React  from "react";
import { Button, Carousel } from "react-bootstrap";

function HeaderSlider() {
  return (
    <>
      <Carousel variant="white" style={{ maxHeihgt: "60px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "70vh", objectFit: "cover" }}
            src="../img/slider/demonslayer.jpg"
            alt="demonslayer "
          />
          <Carousel.Caption style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <h5> - Welcome to Our Store - </h5>
            <p>Where Every Visit Is an Adventure .</p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "70vh", objectFit: "cover" }}
            src="../img/slider/anime.jpg"
            alt="pure mustard oil"
          />
          <Carousel.Caption   style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <h5>Explore, shop, and enjoy! </h5>
            <p> Discover treasures, find joy </p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "70vh", objectFit: "cover" }}
            src="../img/slider/luffy.png"
            alt="smart blender home appliance"
          />
          <Carousel.Caption style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <h5>Where every visit feels like a warm welcome.</h5>
            <p>Enter as strangers, leave as friends.</p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default HeaderSlider;
