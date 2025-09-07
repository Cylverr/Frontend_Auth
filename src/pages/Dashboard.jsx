import Card from "../components/Card";
import Table from "../components/Table";
import Layout from "../Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div className="px-10 lg:px-20 flex flex-col bg-[#FAFAFA] min-h-screen mt-24     ">
        <h1 className="font-semibold font-serif text-xl  mb-10 mt-5">
          Good Morning, Adekola.
        </h1>

        <div className="flex md:flex-row flex-col bg-red-500 p-3 lg:px-5 lg:py-4 gap-3 rounded-lg mt-4 justify-center items-center lg:max-w-3xl">
          <Card text={"Balance"} request={"₦22,000"} action={"Fund Wallet"} />

          <Card text={"Received SMS"} request={"35 "} action={"Receive SMS"} />
        </div>

        <Table />

        <p className="text-center text-[#010101] font-serif mt-8 mb-5 md:mt-12 lg:mt-14">
          &copy; 2025{" "}
          <span className="text-red-500 font-semibold pl-1">SMS</span>
          <span className="italic font-semibold pr-2">padi</span>
          All rights reserved.
        </p>
      </div>
    </Layout>
  );
};

export default Dashboard;
