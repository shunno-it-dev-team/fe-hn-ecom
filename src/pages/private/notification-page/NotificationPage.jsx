import { useState } from "react";
import FaIconByKeyName from "../../../components/icons/FaIconByKeyName";

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Order Shipped",
      message: "Your order #12345 has been shipped and is on its way!",
      time: "2023-10-20T10:00:00Z",
    },
    {
      id: 2,
      title: "New Sale",
      message: "Big sale on electronics! Get up to 50% off.",
      time: "2023-09-25T08:00:00Z",
    },
    {
      id: 3,
      title: "Delivery Update",
      message: "Your order #12344 is out for delivery.",
      time: "2023-09-22T12:00:00Z",
    },
    {
      id: 4,
      title: "Order Delivered",
      message: "Your order #12343 has been delivered.",
      time: "2023-10-15T15:00:00Z",
    },
    {
      id: 5,
      title: "Order Canceled",
      message: "Your order #12342 has been canceled.",
      time: "2023-08-30T11:00:00Z",
    },
  ]);

  const [showAll, setShowAll] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleDelete = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    return { month, day };
  };

  const filteredNotifications = notifications.filter((notification) => {
    const { month, day } = formatDate(notification.time);
    const matchesMonth = selectedMonth ? month === selectedMonth : true;
    const matchesDate = selectedDate ? day === parseInt(selectedDate) : true;
    return matchesMonth && matchesDate;
  });

  const visibleNotifications = showAll
    ? filteredNotifications
    : filteredNotifications.slice(0, 3);

  return (
    <div className="min-h-screen bg-base-100 p-4 md:p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-primary">
          Notifications
        </h1>

        {/* Filter Section */}
        <div className="mb-4 md:mb-6">
          <form className="flex justify-end flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div>
              <label
                htmlFor="month"
                className="block text-sm font-medium text-primary"
              >
                Filter by Month
              </label>
              <select
                id="month"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="select select-primary select-sm"
              >
                <option value="">All Months</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-primary"
              >
                Filter by Date
              </label>
              <input
                id="date"
                type="number"
                min="1"
                max="31"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="input input-primary input-sm"
                placeholder="Day"
              />
            </div>

            <div className="flex items-end">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  setSelectedMonth("");
                  setSelectedDate("");
                }}
              >
                Reset Filters
              </button>
            </div>
          </form>
        </div>

        <div className="divider mb-4"></div>

        {filteredNotifications.length === 0 ? (
          <p className="text-base-content text-center text-lg">
            No notifications found for the selected filter.
          </p>
        ) : (
          <ul className="space-y-4">
            {visibleNotifications.map((notification) => (
              <li key={notification.id}>
                <div
                  className={
                    "p-4 md:p-5 rounded-lg transition-colors  hover:bg-primary hover:bg-opacity-30"
                  }
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-lg text-primary mb-1">
                        {notification.title}
                      </h4>
                      <p className="text-sm text-base-content">
                        {notification.message}
                      </p>
                      <p className="text-xs text-primary mt-1 ">
                        {new Date(notification.time).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <button
                        className="btn btn-sm btn-error"
                        onClick={() => handleDelete(notification.id)}
                      >
                        <FaIconByKeyName iconName="FaTrashAlt" size="2x" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="divider mt-6"></div>
        <div className="text-center">
          {filteredNotifications.length > 3 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="link link-primary link-hover"
            >
              {showAll ? "Show Less" : "Show All"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
