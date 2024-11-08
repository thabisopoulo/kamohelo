// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Dashboard = ({ products }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(imageInterval); // Cleanup the interval on component unmount
    }, []);

    const totalProducts = products.length;
    const totalStock = products.reduce((total, product) => total + product.quantity, 0);
    const lowStockProducts = products.filter(product => product.quantity < 5).length;

    // Chart.js data
    const chartData = {
        labels: products.map(product => product.name),
        datasets: [
            {
                label: 'Stock Levels',
                data: products.map(product => product.quantity),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const images = [
        'path/to/image1.jpg', // Replace with actual image paths
        'path/to/image2.jpg',
        'path/to/image3.jpg',
    ];

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Total Products: {totalProducts}</p>
            <p>Total Stock: {totalStock}</p>
            <p>Low Stock Products: {lowStockProducts}</p>

            <div>
                <h2>Stock Overview</h2>
                <Bar data={chartData} options={{ responsive: true }} />
            </div>

            <div>
                <h2>Rotating Images</h2>
                <img src={images[currentImageIndex]} alt="Rotating" style={{ width: '300px', height: 'auto' }} />
            </div>
        </div>
    );
};

export default Dashboard;
