import Button from "./components/Button/Button.jsx";
import Card2 from "./components/Card2";
import Cards from "./components/Cards/Cards.jsx";

const App = () => {
  return (
    <>
      <Cards />
      <Button />
      <Card2  />
      <Card2  title="this is title"/>
      {/* <Card2 style title="title" description="description" /> */}
    </>
  );
};

export default App;

// npm crate vite@latest  => will create a new folder
// npm crate vite@latest ./   => will create the files in the current directory
// npm run dev
// npm run build
// react router and route
