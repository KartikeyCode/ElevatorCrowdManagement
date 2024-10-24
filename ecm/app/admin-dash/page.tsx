import React from 'react';

const AdminPanel = () => {
    const data = [
        { id: 1, title: 'Dashboard', description: 'Overview of key metrics' },
        { id: 2, title: 'Users', description: 'Manage users and roles' },
        { id: 3, title: 'Products', description: 'Manage product listings' },
        { id: 4, title: 'Reports', description: 'View and export reports' }
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
            <div className="flex flex-col items-center space-y-6">
                {data.map(item => (
                    <div key={item.id} className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex justify-between items-center">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                        <div className="flex space-x-2">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Edit</button>
                            <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminPanel;
