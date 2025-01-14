import useOnlineStatus from "../hooks/useOnlineStatus";


export default function StatusBar() {
  const isOnline = useOnlineStatus();  

  return <h1 className="text-3xl font-semibold my-4">{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}
