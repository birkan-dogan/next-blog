import MainNavigation from "./main-navigation";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
