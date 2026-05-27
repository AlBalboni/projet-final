import { ClipLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  return (
    <div className="col-span-full flex justify-center items-center py-20">
      <ClipLoader
        color="#3b82f6"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
      />
    </div>
  );
};

export default Spinner;