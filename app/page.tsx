'use client'

import OverviewCards from "./_components/OverviewCards";

const DashboardPage = () => {

  return (
    <main className="p-6 lg:p-8">
      <h1 className="text-3xl font-semibold text-blue-950">Good Morning, Charles</h1>
      <p className="mt-2 text-gray-500">You are welcome to this Admin Panel</p>
      <div className="mt-8">
        <OverviewCards />
      </div>
    </main>
  )
}

export default DashboardPage;