import Link  from "next/link";
import style from "../src/styles/signup.module.css"
import design from "../src/styles/signup_design.module.css"
const Signup = () => {
    return (
        <div className={style.signup}>
            <div>
                <h1 className={style.text_center}>Sign up an accout</h1>
                <p className={style.text_center}>Open up an account with us at a zero cost and get your self <br /> all unlimited services</p>
            </div>
            <form className="">
                <div className={style.input_container}>
                    <input 
                        type="text" 
                        id="name" 
                        className={style.input}
                        placeholder="Enter your full names"
                    />
                </div>
                <div className={style.input_container}>
                    <input 
                        type="email" 
                        id="email" 
                        className={style.input}
                        placeholder="Enter your email address"
                    />
                </div>
                <div className={style.input_container}>
                    <input 
                        type="password" 
                        id="pwd" 
                        className={style.input}
                        placeholder="Enter your password"
                    />
                </div>
                <button className={style.btn}>Signup</button>
            </form>
            {/* Sign up instead */}
            <div className={style.p_container}>
                <p className={""}>If have an account <br />
                    <Link href={''} className="">Login here!</Link>
                </p>
            </div>
            <div className={design.design}></div>
            <div className={design.design_2}></div>
            <div className={design.design_3}></div>
        </div>
    );
}
 
export default Signup;