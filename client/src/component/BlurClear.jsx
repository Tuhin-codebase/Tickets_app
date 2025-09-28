/**
 * title: BlurClear component
 * description: BlurClear component of the application;
 * author: Tuhin Ali;
 * date: 2025-10-16;
 */

const BlurClear = ({
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto",
}) => {
  return (
    <div
      style={{ top: top, left: left, right: right, bottom: bottom }}
      className="absolute -z-50 h-58 w-58 aspect-square rounded-full bg-amber-500/60 blur-3xl "
    ></div>
  );
};

export default BlurClear;
