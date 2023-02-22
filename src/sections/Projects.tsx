import { poppins } from "../app/fonts";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div id="projects" className="section border-b items-center flex  flex-col">
      <div className="section-heading pb-16 text-center">My Projects</div>
      <div className={poppins.className}>
        <div className="items-start  justify-center  flex">
          <div className="flex flex-col  pb-10">
            <div className="font-semibold ">
              <span className="text-info text-base">Featured Projects</span>
              <div className="text-card text-3xl">
                Picstack - A Social Media Application
              </div>
            </div>
            <div className="relative">
              <div className="absolute z-10 ">
                <div className="p-6 w-[600px] h-[165px] shadow-xl   font-medium lower-glassmorphism relative text-card">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus eum facilis magnam perferendis natus libero
                  inventore, assumenda quidem reprehenderit, aliquam enim esse
                  quod? Maxime nobis dolorum corporis rem laboriosam amet.
                </div>
              </div>
            </div>
            <div>
              <div>
                <span>
                  <svg
                    width="47"
                    height="47"
                    viewBox="0 0 47 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5333 35.25L9.79163 32.5084L28.5916 13.7084H11.75V9.79169H35.25V33.2917H31.3333V16.45L12.5333 35.25Z"
                      fill="#480089"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    width="37"
                    height="37"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.5 3.08334C16.4755 3.08334 14.4708 3.48211 12.6003 4.25687C10.7299 5.03163 9.03038 6.16721 7.59881 7.59878C4.70763 10.49 3.08337 14.4113 3.08337 18.5C3.08337 25.3142 7.50796 31.0954 13.6284 33.1458C14.3992 33.2692 14.6459 32.7913 14.6459 32.375V29.7696C10.3755 30.6946 9.46587 27.7038 9.46587 27.7038C8.75671 25.9154 7.75462 25.4375 7.75462 25.4375C6.35171 24.4817 7.86254 24.5125 7.86254 24.5125C9.40421 24.6204 10.2213 26.1004 10.2213 26.1004C11.5625 28.4438 13.8288 27.75 14.7075 27.38C14.8463 26.3779 15.2471 25.6996 15.6788 25.3142C12.2563 24.9288 8.66421 23.6029 8.66421 17.7292C8.66421 16.0179 9.25004 14.6458 10.2521 13.5513C10.098 13.1658 9.55837 11.5625 10.4063 9.48126C10.4063 9.48126 11.7013 9.06501 14.6459 11.0538C15.8638 10.7146 17.1896 10.545 18.5 10.545C19.8105 10.545 21.1363 10.7146 22.3542 11.0538C25.2988 9.06501 26.5938 9.48126 26.5938 9.48126C27.4417 11.5625 26.9021 13.1658 26.748 13.5513C27.75 14.6458 28.3359 16.0179 28.3359 17.7292C28.3359 23.6183 24.7284 24.9133 21.2905 25.2988C21.8455 25.7767 22.3542 26.7171 22.3542 28.1508V32.375C22.3542 32.7913 22.6009 33.2846 23.3871 33.1458C29.5075 31.08 33.9167 25.3142 33.9167 18.5C33.9167 16.4755 33.5179 14.4707 32.7432 12.6003C31.9684 10.7299 30.8328 9.03035 29.4013 7.59878C27.9697 6.16721 26.2702 5.03163 24.3997 4.25687C22.5293 3.48211 20.5246 3.08334 18.5 3.08334Z"
                      fill="#4F228D"
                    />
                  </svg>
                </span>
              </div>
            </div>
            {/* <Image src='/skills_2x.webp' alt="my skills" width={700} height={700}/> */}
          </div>
          <div className="">
            <div className=" relative rounded-lg bg-[#2B0B3A] w-[582px] h-[341px]">
              <div className="absolute bottom-0 rounded-lg right-0 w-[500px] h-[300px]">
                hi
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;



