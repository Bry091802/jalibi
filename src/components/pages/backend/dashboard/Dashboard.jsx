import { ChevronDown, Dot } from 'lucide-react'
import Footer from '../partials/Footer'
import Header from '../partials/Header'
import SideNavigation from '../partials/SideNavigation'
import DashboardCard from './DashboardCard'
import DashboardAccordion from './DashboardAccordion'
import { Area, AreaChart, Bar, BarChart, CartesianAxis, CartesianGrid, Legend, Line, LineChart, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'



const Dashboard = () => {
  return (
    <>
        <section className="layout-main">
            <div className="layout-div">
                    <SideNavigation menu="dashboard"/>
                <main>

                    <Header title="Dashboard" subtitle="Welcome to Jollibee"/>
                    <div className="p-8">
                        <div className="grid grid-cols-[1fr_400px] gap-5">
                            <div className="stats">
                                <div className="grid grid-cols-4 gap-5">
                                <DashboardCard title="Chicken Joy" filterby="Chicken Joy"/>
                                <DashboardCard title="Value Meal" filterby="Value Meal"/>
                                <DashboardCard title="Burger" filterby="Burger"/>
                                <DashboardCard title="Spaghetti" filterby="Spaghetti"/>
                                <DashboardCard title="Burger Steak" filterby="Burger Steak"/>
                                <DashboardCard title="Palabok" filterby="Palabok"/>
                                <DashboardCard title="Sides" filterby="Sides"/>
                                <DashboardCard title="Desserts" filterby="Desserts"/>
                                </div>

                                <div className="chart mt-10">
                                    <h3>Menu Prices</h3>
                                        
                                </div>
                            </div>
                            <div className="sidebar custom-scroll overflow-auto h-[calc(100vh-250px)]">
                                <DashboardAccordion title="Spaghetti" filterby="Spaghetti"/>
                                <DashboardAccordion title="Value Meal" filterby="Value Meal"/>
                                <DashboardAccordion title="Palabok" filterby="Palabok"/>
                                <DashboardAccordion title="Chicken Joy" filterby="Chicken Joy"/>
                                <DashboardAccordion title="Burger" filterby="Burger"/>
                                <DashboardAccordion title="Sides" filterby="Sides"/>
                                <DashboardAccordion title="Burger Steak" filterby="Burger Steak"/>
                                <DashboardAccordion title="Desserts" filterby="Desserts"/>
                            </div>

                        </div>
                    </div>

                        <Footer />
                </main>
            </div>
        </section>
    </>
  )
}

export default Dashboard