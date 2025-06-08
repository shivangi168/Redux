export default function EventList() {
  const events = [
    { title: 'test event 2025', price: '100', enrolled: 2, booked: 2, status: 'Published', url: 'https://kidschaupal.com' },
    { title: 'test event', price: '1500', enrolled: 'NA', booked: 0, status: 'Expired', url: 'NA' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      <table className="w-full table-auto bg-white shadow-md rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Title</th>
            <th className="p-2">Price</th>
            <th className="p-2">Enrolled</th>
            <th className="p-2">Booked</th>
            <th className="p-2">Status</th>
            <th className="p-2">URL</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, idx) => (
            <tr key={idx} className="text-center border-t">
              <td className="p-2">{event.title}</td>
              <td className="p-2">{event.price}</td>
              <td className="p-2">{event.enrolled}</td>
              <td className="p-2">{event.booked}</td>
              <td className="p-2">
                <span className={`px-2 py-1 rounded text-white ${event.status === 'Published' ? 'bg-green-500' : 'bg-red-500'}`}>{event.status}</span>
              </td>
              <td className="p-2">{event.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}