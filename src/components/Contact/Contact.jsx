const Contact = () => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <h1 className="text-center text-4xl font-bold mt-16 border-b-4 border-indigo-500 w-72">Contact Us</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">

                <div className="bg-white rounded-lg shadow-lg p-6 m-4">
                    <h2 className="text-2xl font-semibold mb-2">John Doe</h2>
                    <p className="text-gray-600 font-semibold text-sm mb-2">Receptionist</p>
                    <p className="text-gray-600 font-semibold text-sm mb-4">Phone: (123) 456-7890</p>
                    <p className="text-gray-600 font-semibold text-sm">Address: 123 Main Street, City, Country</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 m-4">
                    <h2 className="text-2xl font-semibold mb-2">Jane Smith</h2>
                    <p className="text-gray-600 font-semibold text-sm mb-2">Receptionist</p>
                    <p className="text-gray-600 font-semibold text-sm mb-4">Phone: (987) 654-3210</p>
                    <p className="text-gray-600 font-semibold text-sm">Address: 123 Main Street, City, Country</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 m-4">
                    <h2 className="text-2xl font-semibold mb-2">Bob Johnson</h2>
                    <p className="text-gray-600 font-semibold text-sm mb-2">Receptionist</p>
                    <p className="text-gray-600 font-semibold text-sm mb-4">Phone: (555) 123-4567</p>
                    <p className="text-gray-600 font-semibold text-sm">Address: 123 Main Street, City, Country</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;