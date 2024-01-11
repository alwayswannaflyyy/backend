import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Bills', 'Food', 'Shopping', 'Insurance', 'Clothing'],
    datasets: [
        {
            label: '# of Votes',
            data: [20, 20, 20, 20, 20],
            backgroundColor: [
                '#1C64F2',
                '#E74694',
                '#FDBA8C ',
                '#16BDCA',
                '#F28F1C'
            ],
              borderColor: [
                '#1C64F2',
                '#E74694',
                '#FDBA8C ',
                '#16BDCA',
                '#F28F1C'
              ],
              borderWidth: 1,
            innerWidth: 100,
            outerWidth: 100,
        },
    ],
};
export const DoughNut = () => {
    return <div className='w-[150px]'
    ><Doughnut data={data} />
    </div>
}