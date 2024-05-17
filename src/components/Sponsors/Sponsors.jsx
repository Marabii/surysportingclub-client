import React, { useEffect, useState } from "react";
import "./Sponsors.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import background from "/background6.png"

const SponsorsSection = (props) => {

    const [sponsors, setSponsors] = useState({mainSponsors : [], secondarySponsors : []})
    const serverURL = import.meta.env.VITE_REACT_APP_SERVER;
    const mainSponsorsNames = sponsors.mainSponsors;
    const mainSponsorsImages = mainSponsorsNames.map((name) => {
        return `${serverURL}/sponsors/mainSponsors/${name}`;
    });
    const secondarySponsorsNames = sponsors.secondarySponsors;
    const secondarySponsorsImages = secondarySponsorsNames.map((name) => {
        return `${serverURL}/sponsors/secondarySponsors/${name}`;
    });

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    useEffect(() => {
        const getImages = async () => {
          try {
            const mainSponsorsResponse = await axios.get(`${serverURL}/api/getSponsors/query?category=mainSponsors`)
            const secondarySponsorsResponse = await axios.get(`${serverURL}/api/getSponsors/query?category=secondarySponsors`)
            setSponsors({mainSponsors : mainSponsorsResponse.data, secondarySponsors : secondarySponsorsResponse.data})
          }
          catch(e) {
            console.error(e)
          }
        }
        getImages()
    }, [])

    return (
        <section className="sponsors" style={{width : props.windowWidth - 30}}>
            <div>
                <h2>Sponsors principaux</h2>
                <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                    {mainSponsorsImages.map((image, index) => (   
                        <img key={index} className="sponsor-image" src={image} alt={`sponsor-${index}`} style={{ width: "80%", aspectRatio : "1 / 1" }} />
                    ))}
                </Carousel>
            </div>
            <div>
              <h2>Sponsors Secondaires</h2>
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                    {secondarySponsorsImages.map((image, index) => (   
                        <img key={index} className="sponsor-image" src={image} alt={`sponsor-${index}`} style={{ width: "80%", aspectRatio : "1 / 1" }} />
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default SponsorsSection;
