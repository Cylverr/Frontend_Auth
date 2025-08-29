import Card from "../components/Card";

const Dashboard = () => {
  return (
    <section className="px-10 lg:px-20 flex flex-col bg-[#FAFAFA] min-h-screen mt-24">
      <h1 className="text-semibold font-serif text-lg mb-10">
        Good Morning, Adekola.
      </h1>

      <div className="flex lg:flex-row flex-col bg-red-500 px-3 py-2 lg:px-5 lg:py-4 gap-5 rounded-lg mt-10 lg:max-w-3xl">
        <Card text={"Balance"} request={"₦22,000"} action={"Fund Wallet"} />

        <Card text={"Received SMS"} request={"35"} action={"Receive SMS"} />
      </div>
    </section>
  );
};

export default Dashboard;
