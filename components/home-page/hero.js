import classes from "./hero.module.css";

// to get automatically optimized image we will use Image component of Next.js
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/github.png"
          alt="birkan-dogan"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Birkan</h1>
      <p>
        I blog about full-stack development. Love to hear something about IT
        from you.
      </p>
    </section>
  );
};

export default Hero;
