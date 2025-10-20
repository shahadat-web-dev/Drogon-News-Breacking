import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
  import { ToastContainer, toast } from 'react-toastify';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const SocialLogin = () => {
  const { auth } = useContext(AuthContext);  // 

  // Google SignIN
  const handleGoogleSignin = () => {
    // console.log("button clicked");
    signInWithPopup(auth, googleProvider) // 
      .then((res) => {
        console.log(res.user);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  // Github SignIN
  const handleGithubSigin = () => {
    signInWithPopup(auth, githubProvider)
      .then((res) => {
        console.log(res.user);
      })
      .catch(error => {
        console.log(error.message);
         toast.success(error);
      });
  }




  return (
    <div>
      <h2 className='font-bold mb-5'>Login with</h2>
      <div className='space-y-3'>
        <button onClick={handleGoogleSignin} className='btn btn-outline w-full btn-secondary'>
          <FcGoogle size={24} /> Login with Google
        </button>

        <button onClick={handleGithubSigin} className='btn btn-outline w-full btn-primary'>
          <FaGithub size={24} /> Login with Github
        </button>

      </div>
      <ToastContainer/>
    </div>
  );
};

export default SocialLogin;
