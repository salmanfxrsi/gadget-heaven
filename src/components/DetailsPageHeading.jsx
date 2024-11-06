import PropTypes from "prop-types";

const DetailsPagesHeading = ({ title,subtitle }) => {
  return (
    <div className="bg-[#9538E2] pt-8 pb-56 w-full absolute">
      <h1 className="text-[#FFFFFF] font-bold text-[2rem] mb-4 text-center">
        {title}
      </h1>
      <p className="text-[#FFFFFF] w-11/12 lg:w-5/12 mx-auto text-center">
        {subtitle}
      </p>
    </div>
  );
};

DetailsPagesHeading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default DetailsPagesHeading;
