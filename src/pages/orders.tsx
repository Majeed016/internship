import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { useRouter } from "next/router"
import Navbar from "../components/Navbar"


const orders = [
  {
    id: "PZA001",
    customer: "John Doe",
    type: "Margherita",
    quantity: 2,
    date: "2025-05-22 14:00",
    status: "Delivered",
  },
  {
    id: "PZA002",
    customer: "Jane Smith",
    type: "Pepperoni",
    quantity: 1,
    date: "2025-05-21 11:30",
    status: "Out for Delivery",
  },
  {
    id: "PZA003",
    customer: "Alice Johnson",
    type: "Veggie Supreme",
    quantity: 3,
    date: "2025-05-20 18:45",
    status: "Preparing",
  },
]

const statusStyles: Record<string, string> = {
  Delivered: "bg-green-100 text-green-800",
  "Out for Delivery": "bg-yellow-100 text-yellow-800",
  Preparing: "bg-blue-100 text-blue-800",
  Cancelled: "bg-red-100 text-red-800",
  Pending: "bg-gray-100 text-gray-800",
}

export default function OrdersPage() {
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin")
    }
  }, [status, router])

  if (status === "loading") return <p className="text-center mt-10">Loading...</p>

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-white p-4 md:p-10">
      <h1 className="text-2xl font-bold mb-6">Pizza Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3">Order ID</th>
              <th className="text-left p-3">Customer</th>
              <th className="text-left p-3">Pizza</th>
              <th className="text-left p-3">Quantity</th>
              <th className="text-left p-3">Date</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">{order.type}</td>
                <td className="p-3">{order.quantity}</td>
                <td className="p-3">{order.date}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-sm font-semibold ${statusStyles[order.status]}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}
