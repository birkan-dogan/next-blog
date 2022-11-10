import classes from "./main-navigation.module.css";
import Logo from "./logo";

// we want to use Link component of Next.js to take advantage of automatic data prefetching and to take advantage of the fact that we stay in a single-page application once the page was loaded initially.

import Link from "next/link";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
