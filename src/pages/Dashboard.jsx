import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold text-primary">Dashboard</h1>
      <p className="text-gray-500">
        Logged in as <strong>{user?.email}</strong>
      </p>
    </div>
  );
};

export default Dashboard;