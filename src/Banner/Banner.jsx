import { useEffect, useRef, useState } from "react";

export const Banner = () => {
  const refData = useRef(null);
  const endDate = new Date("2025-12-25 23:59:59").getTime();

  const [tick, setTick] = useState(0);

  const [toast, setToast] = useState(false);

  useEffect(() => {
    refData.current = setInterval(() => {
      setTick((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(refData.current);
  }, []);

  const remaining = endDate - Date.now();

  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

  return (
    <>
      <div className="relative w-full">
        <img
          src="https://img.freepik.com/free-vector/vibrant-color-black-friday-festive-sale-banner-with-50-off_1017-40612.jpg?semt=ais_hybrid&w=740&q=80"
          className="w-full h-120 sm:h-[420px] md:h-[500px] object-cover"
        />

        <div className="absolute right-50 top-50 flex items-center justify-center px-4">
          <div className="flex items-center gap-4 sm:gap-8 bg-amber-600 bg-opacity-60 px-6 py-4 rounded-xl backdrop-blur-md shadow-xl">
            <div className="flex gap-4 sm:gap-6 text-white">
              <div className="text-center">
                <p className="text-xl sm:text-3xl md:text-4xl font-bold">
                  {days}
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wide">
                  Days
                </p>
              </div>

              <div className="text-center">
                <p className="text-xl sm:text-3xl md:text-4xl font-bold">
                  {hours}
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wide">
                  Hours
                </p>
              </div>

              <div className="text-center">
                <p className="text-xl sm:text-3xl md:text-4xl font-bold">
                  {minutes}
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wide">
                  Minutes
                </p>
              </div>

              <div className="text-center">
                <p className="text-xl sm:text-3xl md:text-4xl font-bold">
                  {seconds}
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wide">
                  Seconds
                </p>
              </div>
            </div>
          </div>
          <button
            className="bg-gray-700 text-white m-5 h-10 w-30 cursor-pointer"
            onClick={() => setToast(true)}
          >
            Register Now
          </button>
        </div>
      </div>
      {toast && (
        <div className="fixed bottom-6 right-6 z-50">
          <ReducerComp onClose={() => setToast(false)} />
        </div>
      )}
    </>
  );
};