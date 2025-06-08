import React from 'react';

export default function DashboardCard({ title, icon, count, stats }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card p-3 shadow-sm h-100">
        <div className="d-flex justify-content-between align-items-center">
          <h5>{title}</h5>
          <div className="fs-3">{icon}</div>
        </div>
        <h3 className="my-3">{count}</h3>
        <ul className="list-unstyled">
          {stats.map((item, i) => (
            <li key={i} className="d-flex align-items-center">
              <span
                className="me-2 rounded-circle"
                style={{ width: 10, height: 10, backgroundColor: item.color }}
              ></span>
              {item.label}: {item.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
