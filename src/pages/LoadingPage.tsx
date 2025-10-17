export default function LoadingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Message */}
        <p className="mt-4 text-gray-600 text-sm">Loading, please wait…</p>
      </div>
    </div>
  );
}
