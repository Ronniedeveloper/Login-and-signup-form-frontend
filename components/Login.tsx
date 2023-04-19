import Link  from "next/link";
import style from "../src/styles/login.module.css";
import design from "../src/styles/login_design.module.css";


const Login = () => {
    return (
        <div className={style.login}>
            <div className={""}>
                <h1 className={style.text_center}>Login your accout</h1>
                <p className={style.text_center}>Login your account with us at a zero cost and get your self <br /> all unlimited services</p>
            </div>
            <form action="" className="">
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
                <button className={style.btn}>Login</button>
            </form>
            {/* Sign up instead */}
            <div className={style.p_container}>
                <p className="">If don't have an account <br />
                    <Link href={''} className="">Signup here!</Link>
                </p>
            </div>
            <div className={design.design}></div>
            <div className={design.design_2}></div>
            <div className={design.design_3}></div>
        </div>
    );
}
 
export default Login;