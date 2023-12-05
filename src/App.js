import React from "react";

const App = () => {
  return (
    <>
      <div className=" font-medium text-6xl text-slate-800">
        Fields of expertise
      </div>
      <br />
      <br />
      <div className="text-xl font-medium">
        We regularly dive deep into a wide range of industries and challenges,
      </div>
      <div className="text-xl font-medium">including…</div>
      <br />
      <br />
      <div className="grid grid-cols-2 gap-16">
        <div className="grid grid-cols-2 gap-14">
          <div>
            <img
              src="https://decode.agency/wp-content/webp-express/webp-images/uploads/2021/10/580x580-copy.jpg.webp"
              alt="img"
            />
          </div>
          <div>
            <div className=" flex items-center underline underline-offset-8 text-3xl font-medium">
              <a href="#"> Messaging apps</a>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right "
                viewBox="0 0 16 16"
                className=" mt-2 ml-2 underline underline-offset-8 "
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </div>
            <div className=" text-xl mt-4">
              Businesses thrive when communication is crystal clear. We can make
              staying in contact effortless.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-14">
          <div>
            <img
              src="https://decode.agency/wp-content/webp-express/webp-images/uploads/2021/10/Fintech-new-image.jpg.webp"
              alt="img"
            />
          </div>
          <div>
            <div className=" flex items-center underline underline-offset-8 text-3xl font-medium">
              <a href="#"> Fintech </a>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right "
                viewBox="0 0 16 16"
                className=" mt-2 ml-2 underline underline-offset-8 "
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </div>
            <div className=" text-xl mt-4">
              In today’s financial services space, the big names must be as
              disruptive as the emerging startups. We’ll keep your company on
              the money.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-14">
          <div>
            <img
              src="https://decode.agency/wp-content/webp-express/webp-images/uploads/2021/10/IoT-new-image-1.jpg.webp"
              alt="img"
            />
          </div>
          <div>
            <div className=" flex items-center underline underline-offset-8 text-2xl font-medium">
              <a href="#">Internet of Things</a>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right "
                viewBox="0 0 16 16"
                className=" mt-2 ml-2 underline underline-offset-8 "
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </div>
            <div className=" text-xl mt-4">
              Intuitive software and apps can make connected devices do amazing
              things. We’ll get them talking to each other fluently.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-14">
          <div>
            <img
              src="https://decode.agency/wp-content/webp-express/webp-images/uploads/2021/10/travel-app-image.jpg.webp"
              alt="img"
            />
          </div>
          <div>
            <div className=" flex items-center underline underline-offset-8 text-3xl font-medium">
              <a href="#"> And much more</a>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right "
                viewBox="0 0 16 16"
                className=" mt-2 ml-2 underline underline-offset-8 "
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </div>
            <div className=" text-xl mt-4">
              Hospitality, education, productivity and location-based tech are
              just some of the many other worlds we can help you navigate.
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default App;
