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
          500: {
            slidesPerView: 1,
            direction: "horizontal",
          },
          1024: {
            slidesPerView: 1.9,
            direction: "vertical",
          },
          1200: { slidesPerView: 2, direction: "vertical" },

          1600: {
            slidesPerView: 3,
            direction: "vertical",
          },
        }}
        speed={2500}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
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
              <br className="block min-[1452px]:hidden" />
              {`(chunk: ResolvedModelChunk): T {`} <br />
            </p>
            <p className="pl-3">
              const value: <br className="block min-[1452px]:hidden" />{" "}
              <span className="text-[#E99287]">{"T"}</span>{" "}
              <span className="text-[#5565E8]">=</span>{" "}
              <span className="text-[#C98BDF]">parseModel</span>
              {`(chunk.`}
              <span className="text-[#5565E8]">{"_response,"}</span>{" "}
              <br className="block min-[1452px]:hidden" />
              {` chunk.`}
              <span className="text-[#5565E8]">{"value)"}</span>; <br />
              <span className="text-[#E99287]">
                const
              </span> initializedChunk:{" "}
              <br className="block min-[1452px]:hidden" />
              <span className="text-[#FEA55F]">InitializedChunk</span>
              <span className="text-[#5565E8]">
                {"<"}
                <span className="text-[#FEA55F]">{"T"}</span>
                {">"}
              </span>
              <span> = </span>
              <br className="block min-[1452px]:hidden" /> {`(chunk: any);`}{" "}
              <br />
              initializedChunk.
              <span className="text-[#5565E8]">
                _status = <br className="block min-[1452px]:hidden" />{" "}
                INITIALIZED
              </span>
              ; <br />
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
                : <br className="block min-[1452px]:hidden" /> JSONValue
                <span>
                  {" }"}
                </span> <br className="block min-[1652px]:hidden" /> |{" "}
                {"$ReadOnlyArray"}{" "}
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
                const tuple: {`[mixed, mixed, mixed, mixed]`} ={" "}
                <br className="block min-[1452px]:hidden" /> {`(value: any)`};
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
              <br className="block min-[1452px]:hidden" />
              {`(chunk: ResolvedModelChunk): T {`} <br />
            </p>
            <p className="pl-3">
              const value: <br className="block min-[1452px]:hidden" />{" "}
              <span className="text-[#E99287]">{"T"}</span>{" "}
              <span className="text-[#5565E8]">=</span>{" "}
              <span className="text-[#C98BDF]">parseModel</span>
              {`(chunk.`}
              <span className="text-[#5565E8]">{"_response,"}</span>{" "}
              <br className="block min-[1452px]:hidden" />
              {` chunk.`}
              <span className="text-[#5565E8]">{"value)"}</span>; <br />
              <span className="text-[#E99287]">
                const
              </span> initializedChunk:{" "}
              <br className="block min-[1452px]:hidden" />
              <span className="text-[#FEA55F]">InitializedChunk</span>
              <span className="text-[#5565E8]">
                {"<"}
                <span className="text-[#FEA55F]">{"T"}</span>
                {">"}
              </span>
              <span> = </span>
              <br className="block min-[1452px]:hidden" /> {`(chunk: any);`}{" "}
              <br />
              initializedChunk.
              <span className="text-[#5565E8]">
                _status = <br className="block min-[1452px]:hidden" />{" "}
                INITIALIZED
              </span>
              ; <br />
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
                : <br className="block min-[1452px]:hidden" /> JSONValue
                <span>
                  {" }"}
                </span> <br className="block min-[1652px]:hidden" /> |{" "}
                {"$ReadOnlyArray"}{" "}
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
                const tuple: {`[mixed, mixed, mixed, mixed]`} ={" "}
                <br className="block min-[1452px]:hidden" /> {`(value: any)`};
              </span>{" "}
            </p>
          </pre>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
