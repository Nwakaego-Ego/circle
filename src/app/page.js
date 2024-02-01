import Dasboard from "../app/component/dashboard/dashboard.jsx";

export default function Home() {
  return (
    <main>
      <MyContext.Provider value={sharedData}>
        <Dasboard />
      </MyContext.Provider>
    </main>
  );
}
