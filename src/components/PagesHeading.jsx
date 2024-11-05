import PropTypes from "prop-types";

const PagesHeading = ({ title,subtitle }) => {
  return (
    <div className="bg-[#9538E2] py-8">
      <h1 className="text-[#FFFFFF] font-bold text-[2rem] mb-4 text-center">
        {title}
      </h1>
      <p className="text-[#FFFFFF] w-11/12 lg:w-5/12 mx-auto text-center">
        {subtitle}
      </p>
    </div>
  );
};

PagesHeading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default PagesHeading;
