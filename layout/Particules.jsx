import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const options = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 150,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: false,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#21c55d",
    },
    links: {
      color: "#21c55d",
      distance: 150,
      enable: true,
      opacity: 0.7,
      width: 0.5,
    },
    collisions: {
      enable: true,
    },
    move: {
      directions: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 1000,
      },
      value: 80,
    },
    opacity: {
      value: 0.7,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 2, max: 4 },
    },
  },
  detectRetina: true,
};

const Page = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return <Particles className="z-0" init={particlesInit} options={options} />;
};

export default Page;
