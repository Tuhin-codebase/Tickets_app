/**
 * title:AdminTitle  component
 * description: AdminTilte component of the application;
 * author: Tuhin Ali;
 * date: 2025-10-30;
 */

const AdminTitle = ({ text, text2 }) => {
  return (
    <h1 className="font-medium text-2xl ">
      {text} <span className="underline text-amber-400">{text2} </span>
    </h1>
  );
};
export default AdminTitle;
