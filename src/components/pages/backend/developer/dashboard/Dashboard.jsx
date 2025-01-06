import useQueryData from "@/components/custom-hook/useQueryData";
import FetchingSpinner from "@/components/partials/spinner/FetchingSpinner";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import IconNoData from "../partials/IconNoData";
import SideNavigation from "../partials/SideNavigation";
import TableLoader from "../partials/TableLoader";
import DashboardAccordion from "./DashboardAccordion";
import DashboardCard from "./DashboardCard";
import { getCategoryPrices } from "./function";

const Dashboard = () => {
  const {
    isLoading: isLoadingCategory,
    isFetching: isFetchingCategory,
    error: errorCategory,
    data: dataCategory,
  } = useQueryData(
    `/v2/category`, // endpoint
    "get", // method
    "category" // key
  );
  const {
    isLoading: isLoadingFood,
    isFetching: isFetchingFood,
    error: errorFood,
    data: dataFood,
  } = useQueryData(
    `/v2/food`, // endpoint
    "get", // method
    "food" // key
  );

  const tableData = getCategoryPrices(dataCategory, dataFood);

  return (
    <>
      <section className="layout-main">
        <div className="layout-div">
          <SideNavigation menu="dashboard" />
          <main>
            <Header title="Dashboard" subtitle="Welcome to Jollibee" />
            <div className="p-5 overflow-y-auto custom-scroll">
              <div className="grid grid-cols-[1fr_400px] gap-5">
                <div className="stats">
                  <div className="chart pb-28 relative">
                    {(isFetchingCategory || isFetchingFood) &&
                      !isLoadingCategory &&
                      !isLoadingFood && <FetchingSpinner />}
                    {isLoadingCategory || isLoadingFood ? (
                      <TableLoader cols={1} count={15} />
                    ) : (
                      <ResponsiveContainer width={"100%"} height={340}>
                        <h2>Menu Prices</h2>
                        <BarChart
                          width={1000}
                          height={400}
                          // data={menus.slice(0, 10)}
                          data={tableData}
                          margin={{
                            top: 40,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="category_title" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar
                            dataKey="menu_price"
                            fill="#8884d8"
                            activeBar={
                              <Rectangle fill="yellow" stroke="blue" />
                            }
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    )}
                  </div>

                  <div className="relative">
                    {isFetchingCategory && !isLoadingCategory && (
                      <FetchingSpinner />
                    )}
                    {isLoadingCategory && <TableLoader cols={4} count={20} />}
                    {dataCategory?.count === 0 && <IconNoData />}
                    <div className="grid grid-cols-4 gap-5 mt-8">
                      {dataCategory?.count > 0 &&
                        dataCategory?.data.map((item, key) => {
                          return (
                            <DashboardCard
                              key={key}
                              item={item}
                              dataFood={dataFood}
                            />
                          );
                        })}
                    </div>
                  </div>
                </div>

                <div className=" relative sidebar custom-scroll overflow-auto h-[calc(100vh-250px)]">
                  {isFetchingCategory && !isLoadingCategory && (
                    <FetchingSpinner />
                  )}
                  {isLoadingCategory && <TableLoader cols={1} count={15} />}
                  {dataCategory?.count === 0 && <IconNoData />}
                  {dataCategory?.count > 0 &&
                    dataCategory?.data.map((item, key) => {
                      return (
                        <DashboardAccordion
                          key={key}
                          item={item}
                          dataFood={dataFood}
                          dataCategory={dataCategory}
                        />
                      );
                    })}
                </div>
              </div>
            </div>

            <Footer />
          </main>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
