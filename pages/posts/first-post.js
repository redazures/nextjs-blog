import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function FirstPost() {
  return (
    <>
    <Head>
      <title>First-tist post</title>
    </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <div>Back to home</div>
        </Link>
      </h2>
      <h3>
        <Image src="https://r4x8d8k3.rocketcdn.me/wp-content/uploads/2020/05/hannah-grace-fk4tiMlDFF0-unsplash-1200x800.jpg" height={144} width={144} alt='profile'/>
      </h3>
    </>
  );
}

//In order to utilized pictures from links, we need to add a next.config.js file next to package.json and add the domain
