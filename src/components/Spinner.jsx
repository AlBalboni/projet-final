import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#fb2c36"
      loading={loading}
      size={150}
      cssOverride={override}
    />
  );
};

export default Spinner;
