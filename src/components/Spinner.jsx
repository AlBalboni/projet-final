import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#0059ff"
      loading={loading}
      size={150}
      cssOverride={override}
      aria-label="Loading Spinner"
    />
  );
};

export default Spinner;
