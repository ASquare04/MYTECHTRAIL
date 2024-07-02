import React from "react";

function Hero() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Microdosing synth tattooed vexillologist
          </h1>
          <p class="mb-8 leading-relaxed">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo
            booth af fingerstache pitchfork.
          </p>
          <div class="flex justify-center gap-4">
            <button class="flex items-center px-4 py-2 font-semibold bg-white rounded text-black">
              <i class="fab fa-github mr-2"></i>
              Just Visit
            </button>
            <button class="flex items-center px-4 py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700">
              <i class="fab fa-linkedin mr-2"></i>
              Connect Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
