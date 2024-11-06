import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="py-[100px]">
            <p className="font-bold text-7xl text-center text-red-500">PAGE NOT FOUND</p>
            <Link to={"/"} className="font-bold text-center text-5xl mt-16">Go Back To Home By Click Here</Link>
        </div>
    );
};

export default ErrorPage;