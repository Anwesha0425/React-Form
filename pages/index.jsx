import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse(formData);
    setFormData({ name: "", email: "" });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setResponse(null);
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-[#fcf8e3]">
      <div className="container mx-auto flex gap-6 p-4">
        {/* Form */}
        <div className="flex-1 bg-[white] p-6 rounded-lg shadow-lg hover:scale-105 border-2 border-[#88f188]">
          <h2 className="text-2xl font-semibold mb-6">Submit Your Details</h2>
          <form onSubmit={handleSubmit} onReset={handleReset}>
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[green]"
              required
            />

            <label htmlFor="email" className="block text-lg mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[green]"
              required
            />

            <button
              type="submit"
              className="bg-[#88f188] text-[white] px-4 py-2 rounded-lg hover:bg-[darkgreen] transition"
            >
              Submit
            </button>
            <button
              type="reset"
              className="bg-[#88e5f1] text-[white] mx-2 px-4 py-2 rounded-lg hover:bg-[#215f65] transition"
            >
              Reset
            </button>
          </form>
        </div>

        {/* Response*/}
        <div className="flex-1 bg-[white] p-6 rounded-lg shadow-lg hover:scale-105 border-2 border-[#88f188]">
          <h2 className="text-2xl font-semibold mb-6">Response</h2>
          {response ? (
            <div>
              <p className="mb-4">
                <strong>Name:</strong> {response.name}
              </p>
              <p>
                <strong>Email:</strong> {response.email}
              </p>
            </div>
          ) : (
            <p className="text-[black]">No response yet. Fill the form!</p>
          )}
        </div>
      </div>
    </div>
  );
}
