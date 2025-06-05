import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import { FaArrowRight } from "react-icons/fa6";

const HeroSection = () => {
  useEffect(() => {
    // Initialize Lottie animation
    const animationContainer = document.getElementById('lottie-animation');
    if (animationContainer) {
      lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://cdn.prod.website-files.com/66e88746834b80507cdf7933/67ae3aebcebb1581def51119_orb.json',
      });
    }
  }, []);

  return (
    <div className="w-4/5 mx-auto text-center">
      <div className="flex justify-center">
        <div
          id="lottie-animation"
          className="w-[180px] h-[180px]"
          style={{ transform: 'translate3d(0px, 0px, 0px)', contentVisibility: 'visible' }}
        ></div>
      </div>
      <h2 className="text-9xl font-bold mb-4 text-white">AI at Webflow</h2>
      <div className="w-4/5 mx-auto">
        <p className="text-lg mb-8 text-gray-400">
          Elevate your site with AI embedded across the Webflow platform and extend its power with deep integrations with a growing ecosystem of AI-powered apps.
        </p>
        <a
          href="https://webflow.com/ai?utm_campaign=brandjs"
          className="inline-flex items-center text-white hover:underline"
          data-cta-text="Discover AI at Webflow"
          data-cta="homepage page CTA"
          data-cta-position="ai features section"
          data-wf-native-id-path="a6a55698-fe63-32f4-1797-8f9e2495885a"
          data-wf-ao-click-engagement-tracking="true"
          data-wf-element-id="a6a55698-fe63-32f4-1797-8f9e2495885a"
        >
          <span className="mr-2">Discover AI at Webflow</span>
          <span>
            <FaArrowRight />
          </span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;