// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/swiper-bundle.css";

// import required modules
import { Autoplay, EffectCoverflow } from "swiper/modules";

export default function AboutPreviewSlider() {
  return (
    <>
      <Swiper
        // direction={"vertical"}

        breakpoints={{
          1600: {
            slidesPerView: 3,
            direction: "vertical",
          },
          1560: {
            slidesPerView: 1.9,
            direction: "vertical",
          },
          1500: {
            slidesPerView: 1.8,
            direction: "vertical",
          },
          1440: {
            slidesPerView: 1.7,
            direction: "vertical",
          },
          1380: {
            slidesPerView: 1.6,
            direction: "vertical",
          },
          1320: {
            slidesPerView: 1.5,
            direction: "vertical",
          },
          1260: {
            slidesPerView: 1.4,
            direction: "vertical",
          },
          1200: {
            slidesPerView: 1.3,
            direction: "vertical",
          },
          1120: {
            slidesPerView: 1.2,
            direction: "vertical",
          },
          1060: {
            slidesPerView: 1.1,
            direction: "vertical",
          },
          1024: {
            slidesPerView: 1,
          },
          1022: {
            slidesPerView: 1.1,
            direction: "horizontal",
          },
        }}
        speed={2500}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        effect="coverflow"
        loop={true}
        spaceBetween={18}
        centeredSlides={true}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, EffectCoverflow]}
        className="flex w-full break-all"
      >
        <SwiperSlide className="swiper-custom">
          <pre>
            <p className="">
              <span className="text-[#E99287]">function </span>
              {"initializeModelChunk"}
              <span className="text-[#5565E8]">
                {"<"}
                <span className="text-[#43D9AD]">{"T"}</span>
                {">"}
              </span>
              {`(chunk: ResolvedModelChunk): T {`} <br />
            </p>
            <p className="pl-3">
              const value: <span className="text-[#E99287]">{"T"}</span>{" "}
              <span className="text-[#5565E8]">=</span>{" "}
              <span className="text-[#C98BDF]">parseModel</span>
              {`(chunk.`}
              <span className="text-[#5565E8]">{"_response,"}</span>
              {` chunk.`}
              <span className="text-[#5565E8]">{"value)"}</span>; <br />
              <span className="text-[#E99287]">
                const
              </span> initializedChunk:{" "}
              <span className="text-[#FEA55F]">InitializedChunk</span>
              <span className="text-[#5565E8]">
                {"<"}
                <span className="text-[#FEA55F]">{"T"}</span>
                {">"}
              </span>
              <span> =</span> {`(chunk: any);`} <br />
              initializedChunk.
              <span className="text-[#5565E8]">
                _status = INITIALIZED
              </span>; <br />
              initializedChunk.
              <span className="text-[#5565E8]">_value =</span> value; <br />
              <span className="text-[#E99287]">return</span> value;{" "}
            </p>
            <span>{"}"}</span>
          </pre>
        </SwiperSlide>
        <SwiperSlide className="swiper-custom">
          <pre>
            <p className="break-all">
              <span className="text-[#E99287]">export function </span>
              <span className="text-[#43D9AD]">{"parseModelTuple("}</span>
            </p>
            <p className="break-all">
              <span className="pl-3">
                response: <span className="text-[#E99287]">Response</span>
              </span>
              ,
              <br />
              <span className="pl-3 break-all">
                value:
                <span className="">{" {"}</span>
                <span className="text-[#FEA55F]"> + </span>
                <span className="text-[#5565E8]">
                  {"["}
                  key: string
                  {"]"}
                </span>
                : JSONValue
                <span>{" }"}</span> | {"$ReadOnlyArray"}{" "}
                <span className="text-[#5565E8]">
                  {"<"}
                  <span className="text-[#43D9AD]">JSONValue</span>
                  {">"}
                </span>
                ,
              </span>{" "}
              <br />
              <span className="">{"): any {"}</span> <br />
              <span className="pl-3">
                const tuple: {`[mixed, mixed, mixed, mixed]`} = {`(value: any)`}
                ;
              </span>{" "}
            </p>
          </pre>
        </SwiperSlide>
        <SwiperSlide className="swiper-custom">
          <pre>
            <p className="">
              <span className="text-[#E99287]">function </span>
              {"initializeModelChunk"}
              <span className="text-[#5565E8]">
                {"<"}
                <span className="text-[#43D9AD]">{"T"}</span>
                {">"}
              </span>
              {`(chunk: ResolvedModelChunk): T {`} <br />
            </p>
            <p className="pl-3">
              const value: <span className="text-[#E99287]">{"T"}</span>{" "}
              <span className="text-[#5565E8]">=</span>{" "}
              <span className="text-[#C98BDF]">parseModel</span>
              {`(chunk.`}
              <span className="text-[#5565E8]">{"_response,"}</span>
              {` chunk.`}
              <span className="text-[#5565E8]">{"value)"}</span>; <br />
              <span className="text-[#E99287]">
                const
              </span> initializedChunk:{" "}
              <span className="text-[#FEA55F]">InitializedChunk</span>
              <span className="text-[#5565E8]">
                {"<"}
                <span className="text-[#FEA55F]">{"T"}</span>
                {">"}
              </span>
              <span> =</span> {`(chunk: any);`} <br />
              initializedChunk.
              <span className="text-[#5565E8]">
                _status = INITIALIZED
              </span>; <br />
              initializedChunk.
              <span className="text-[#5565E8]">_value =</span> value; <br />
              <span className="text-[#E99287]">return</span> value;{" "}
            </p>
            <span>{"}"}</span>
          </pre>
        </SwiperSlide>
        <SwiperSlide className="swiper-custom">
          <pre>
            <p className="">
              <span className="text-[#E99287]">export function </span>
              <span className="text-[#43D9AD]">{"parseModelTuple("}</span>
            </p>
            <p className="">
              <span className="pl-3">
                response: <span className="text-[#E99287]">Response</span>
              </span>
              ,
              <br />
              <span className="pl-3">
                value:
                <span className="">{" {"}</span>
                <span className="text-[#FEA55F]"> + </span>
                <span className="text-[#5565E8]">
                  {"["}
                  key: string
                  {"]"}
                </span>
                : JSONValue
                <span>{" }"}</span> | {"$ReadOnlyArray"}{" "}
                <span className="text-[#5565E8]">
                  {"<"}
                  <span className="text-[#43D9AD]">JSONValue</span>
                  {">"}
                </span>
                ,
              </span>{" "}
              <br />
              <span className="">{"): any {"}</span> <br />
              <span className="pl-3">
                const tuple: {`[mixed, mixed, mixed, mixed]`} = {`(value: any)`}
                ;
              </span>{" "}
            </p>
          </pre>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
