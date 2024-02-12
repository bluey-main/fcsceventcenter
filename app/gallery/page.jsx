"use client";
import '../globals.css'
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import { useEffect, useState, useRef } from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import styles from './styles.module.css'

const playFair = Playfair_Display({ weight: "400", subsets: ["latin"] });

export default function Gallery() {
  useEffect(() => {
    register();
  }, []);
  const [selectedArray, setSelectedArray] = useState([]);

  const foodImages = [
    "/images/gallery/food/food1.jpeg",
    "/images/gallery/food/food2.jpg",
    "/images/gallery/food/food3.jpg",
    "/images/gallery/food/food4.jpg",
    "/images/gallery/food/food5.jpg",
    "/images/gallery/food/food6.jpg",
    "/images/gallery/food/food7.jpg",
    "/images/gallery/food/food8.jpg",
    "/images/gallery/food/food9.jpg",
  ];

  const drinksImages = [
    "/images/gallery/drinks/drink1.jpg",
    "/images/gallery/drinks/drink2.jpg",
    "/images/gallery/drinks/drink3.jpg",
  ];

  const facilitiesImages = [
    "/images/gallery/facilities/fac1.jpg",
    "/images/gallery/facilities/fac2.jpg",
    "/images/gallery/facilities/fac3.jpg",
    "/images/gallery/facilities/fac4.jpg",
    "/images/gallery/facilities/fac5.jpg",
    "/images/gallery/facilities/fac6.jpg",
    "/images/gallery/facilities/fac7.jpg",
    "/images/gallery/facilities/fac8.jpg",
    "/images/gallery/facilities/fac9.jpg",
    "/images/gallery/facilities/fac10.jpg",
  ];

  const changeArray = () => {};

  return (
    <div>
      <div className="w-full min-h-screen bg-red-">
        <div
          className={`w-full h-[20rem] bg-blue-400  ${playFair.className} bg-[url('/images/gallery/galleryHeader.jpg')] bg-cover bg-fixed`}
        >
          <div className="w-full h-full bg-[#000000ab] flex justify-center items-center">
            <h1 className="text-7xl text-white">Gallery</h1>
          </div>
        </div>

        <div className="w-full lg:h-[30rem] h-[60rem] bg-yellow flex lg:px-40 lg:flex-row flex-col">
          <div className="lg:w-[40%] w-full lg:h-full h-[60%] lg:px-0 px-7 bg-red flex justify-center flex-col gap-y-6">
            <p className={` text-6xl ${playFair.className}`}>Food</p>
            <p className='text-xl'>
              Get ready to feast at our Bar and Grill&apos;s food spot!
              We&apos;re dishing out all your grill cravings and throwing in
              some local vibes too. From classics to hometown faves, our
              menu&apos;s stacked with flavor. Join us for a laid-back, tasty
              time that&apos;s all about good eats and good vibes!
            </p>
          </div>
          <div className="lg:w-[60%] w-full h-full bg-blue-">
            <swiper-container
            style={{
              height:'100%',
              "--swiper-navigation-color": "#a12f27ff",
              "--swiper-pagination-color": "#008000ff",


            }}
            className={styles.className}
              pagination="true"
              pagination-clickable="true"
              navigation="true"
              space-between="30"
              centered-slides="true"
              autoplay-delay="2500"
              autoplay-disable-on-interaction="false"
              
            >
              {foodImages.map((image, index) => (
              <swiper-slide key={index}>
                <div className='w-full h-full flex justify-center items-center rounded-xl overflow-hidden'>
                  <Image
                    src={image}
                    width={1000}
                    height={1000}
                    alt=""
                    className="w-[70%] h-[70%]"
                    objectFit="contain"
                  />
                </div>
              </swiper-slide>

              ))}
              
            </swiper-container>
          </div>
        </div>

     
        {/* <div className="w-full h-[40rem] bg-yellow-300 flex justify-center items-center px-7">
          <div className="w-[50%] h-[80%] bg-red-700 flex justify-center items-center">
            <div className="w-[90%] h-[90%]  rounded-xl">
              <swiper-container effect="coverflow" navigation={true} pagination={true} className='h-full'  onSwiper={(swiper) => (swiperInstance.current = swiper)}>
                {selectedArray.map((image, index) => (
                  <swiper-slide key={index} >
                  <div className="rounded-xl flex justify-center items-center overflow-hidden w-[40rem] h-[30rem]" style={{
                   
                    backgroundSize: "cover",
                    backgroundRepeat:"no-repeat",
                    backgroundPosition: "center",
                    transition: "ease-in-out",
                    transitionBehavior: "allow-discrete",
                  }}>
                    <Image
                      src={image}
                      width={1000}
                      height={1000}
                      alt=""
                      className="w-[80%] h-full"
                    />
                  </div>
                </swiper-slide>
                ))}
                
                
              </swiper-container>
            </div>
          </div>
          <div
            className={`w-[30%] h-[80%] bg-green-700 flex flex-col gap-y-4 p-8 ${playFair.className}`}
          >
            <div className="flex-1 bg-orange-300 rounded-xl  bg-[url('/images/gallery/food/food2.jpg')] bg-cover bg-center overflow-hidden" onClick={() => setSelectedArray(foodImages)}>
              <div className="w-full h-full bg-[#00000073] flex justify-center items-center">
                <p className="text-4xl text-white">Food</p>
              </div>
            </div>
            <div className="flex-1 bg-orange-300 rounded-xl  bg-[url('/images/gallery/drinks/drink2.jpg')] bg-cover bg-center overflow-hidden" onClick={() => setSelectedArray(drinksImages)}>
              <div className="w-full h-full bg-[#00000073] flex justify-center items-center">
                <p className="text-4xl text-white">Drinks</p>
              </div>
            </div>
            <div className="flex-1 bg-orange-300 rounded-xl  bg-[url('/images/gallery/facilities/fac9.jpg')] bg-cover  overflow-hidden" onClick={() => setSelectedArray(facilitiesImages)}>
              <div className="w-full h-full bg-[#00000073] flex justify-center items-center">
                <p className="text-4xl text-white">Facilities</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* <h1>Gallery</h1>
      <div className="w-1/2 h-1/2 bg-red-400">
        <swiper-container>
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          ...
        </swiper-container>
      </div> */}
    </div>
  );
}
