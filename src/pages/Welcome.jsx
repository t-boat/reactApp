import myWelcomeImage from '../assets/images/welcome.png';
import myBackgroundImage from '../assets/images/welcomeBackground.png'

export default function WelcomeScreen(){

    return (
        <div className="bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url('./assets/images/welcomeBackground.png')] bg-center bg-cover h-screen text-white text-4xl flex flex-col place-items-center place-content-center">
            <h1>Savory & Sweet</h1>
            <img src={myWelcomeImage} alt="" />
            
            {/* <img src={myBackgroundImage} alt="" /> */}
        </div>
    );
}