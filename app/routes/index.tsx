import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Agendas from "~/components/Agendas";
import BrideAndGroom from "~/components/BrideAndGroom";
import Countdown from "~/components/Countdown";
import DigitalEnvelope from "~/components/DigitalEnvelope";
import LocationMap from "~/components/LocationMap";
import Message from "~/components/Message";
import SectionWrapper from "~/components/Utils/SectionWrapper";
import WelcomeModal from "~/components/WelcomeModal";
import { indexAction, indexLoader } from "~/controls";
import heroBg from "~/images/cover-sample.jpg";
import heroBgMobile from "~/images/cover-sample-mobile.jpg";
import MusicPlayer from "~/components/MusicPlayer";
import GalleryPhotos from "~/components/GalleryPhotos";

export const loader = indexLoader;
export const action = indexAction;

export default function Index() {
  const isSmallScreen = useMediaQuery({ query: `(max-width: 768px)` });

  const [openWelcome, setOpenWelcome] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const onCloseWelcomeModal = () => {
    setOpenWelcome(false);
    document.body.style.overflow = "auto";
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    console.log({isSmallScreen});
    setIsMobile(isSmallScreen);
  }, [isSmallScreen]);

  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
      className="bg-[#f9f9f9]"
    >
      <WelcomeModal isOpen={openWelcome} onClose={onCloseWelcomeModal} />

      <div
        className="flex justify-center items-center h-screen md:h-[750px] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${isMobile ? heroBgMobile : heroBg})` }}
      >
        <div className="mb-1">
          <h4
            className="text-center font-head font-bold text-5xl mb-4 text-[#EFEFEF]"
            style={{ textShadow: "3px 3px 1px #000" }}
          >
            Freshka & Aji
          </h4>
          <div
            className="text-center font-black font-sans text-md text-2xl text-[#EFEFEF] italic border-t-2 border-[#fff] pt-3"
            style={{ textShadow: "2px 2px 1px #000" }}
          >
            18.02.2023
          </div>
        </div>
      </div>

      <SectionWrapper className="bg-[#999b84] py-6">
        <BrideAndGroom />
      </SectionWrapper>

      <SectionWrapper className="mb-36 pt-24">
        <Countdown />
      </SectionWrapper>

      <SectionWrapper className="mb-36">
        <Agendas />
      </SectionWrapper>

      <div className="mb-24">
        <LocationMap />
      </div>

      <SectionWrapper className="mb-36">
        <GalleryPhotos />
      </SectionWrapper>

      <SectionWrapper className="mb-36">
        <Message />
      </SectionWrapper>

      <SectionWrapper className="mb-36">
        <DigitalEnvelope />
      </SectionWrapper>

      <div className="py-24 bg-[#EFEFEF] text-gray-700 relative text-center font-sans">
        © 2022 by <span className="font-semibold">Fauzi</span>
      </div>

      <MusicPlayer play={!openWelcome} />
    </div>
  );
}
