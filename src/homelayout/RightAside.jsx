import SocialLogin from "../components/SocialLogin";
import FindUs from "./FindUs";
import Qzone from "./Qzone";


const RightAside = () => {
  return (
    <div className="space-y-8">
      <SocialLogin/>
      <FindUs/>
      <Qzone/>
    </div>
  );
};

export default RightAside;