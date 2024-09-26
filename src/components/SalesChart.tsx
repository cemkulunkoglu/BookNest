// components/SalesChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
    labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
    datasets: [
        {
            label: 'Roman',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 55, 40, 45, 60, 70, 80, 90],
        },
        {
            label: 'Bilim Kurgu',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            data: [45, 39, 60, 71, 46, 35, 30, 35, 50, 60, 70, 80],
        },
        {
            label: 'Tarih',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
            data: [35, 25, 50, 65, 34, 23, 20, 25, 40, 50, 60, 70],
        },
        {
            label: 'Çocuk',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [20, 15, 40, 55, 24, 13, 10, 15, 30, 40, 50, 60],
        },
        {
            label: 'Felsefe',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
            data: [15, 10, 30, 45, 14, 8, 5, 10, 20, 30, 40, 50],
        }
    ]
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Aylık Satış Verileri (2023)',
        },
    },
};

const SalesChart: React.FC = () => {
    return (
        <div>
            <Bar data={data} options={options} />
            <hr />
            <div className="stats">
                <i className="fa fa-clock-o"></i> Şimdi güncellendi
            </div>
        </div>
    );
};

export default SalesChart;
