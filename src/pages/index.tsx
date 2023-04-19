import Login from "../../components/Login";
import Signup from "../../components/Signup";
import Head from "next/head";
import style from "../styles/home.module.css"

const Home = () => {
  return (
    <>
      <Head>
        <title>Login | Signup</title>
      </Head>
      <div className={style.content}>
        <Signup />
        <Login />
      </div>
    </>
  );
}
 
export default Home;
