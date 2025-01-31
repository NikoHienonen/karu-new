//const APIEndPoint = "https://dkfct8ge2wjge.cloudfront.net/v1/hello";

export function App() {
  return (
    <div className="w-full h-full">
      <video
        autoPlay
        loop
        muted
        className="-z-100 w-screen h-screen object-cover top-0 left-0"
      >
        <source src="/promovideo.mp4" type="video/mp4" />
      </video>
      <div className="z-10 text-white w-full h-full flex justify-center items-center absolute top-0 left-0 flex-col  font-custom gap-10">
        <div className="w-72 sm:w-96">
          <img src="/logo-white.png" />
        </div>
        <p className="text-lg sm:text-xl text-center">
          SYMPHONIC METAL FROM <br /> THE COLD WASTES OF FINLAND
        </p>
      </div>
    </div>
  );
}
