import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRow } from 'mdb-react-ui-kit'
import React, { useEffect, useRef } from 'react'
import stud from './images/student.jpg'
import teach from './images/teacher.png'
import para from './images/parent.jpg'
import inc from './images/income.jpg'
import { Calendar, theme } from 'antd';
import { Col, Row } from 'react-bootstrap'
import BackpackOutlinedIcon from '@mui/icons-material/BackpackOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';

import twit from './images/twitter.png'
import facebook from './images/facebook.png'
import google from './images/googleplus.png'
import linkedin from './images/linkedin.png'


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

const Dashboard = () => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = ['2023'];

const data = {
  labels,
  datasets: [
    
    {
      label: 'Fees $8000',
      data: [80],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Collection $10000',
      data: [100],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Expences $5000 ',
      data: [50
      ],
      backgroundColor: 'yellow',
    },
  ],
};

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'FEES COLLECTION & EXPENCES',
      },
    },
  };
  


    const { token } = theme.useToken();
  const wrapperStyle = {
    width: 510,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div className='m-3'>
      <div className='flex ml-3 dashboard1'>

        <div className='card w-[250px] h-[130px] text-white item-center flex flex-column shadow-lg bg-gradient-to-b from-blue-900 via-blue-700 to-blue-900 m-2'>
          <div className='card-inner flex m-3' style={{justifyContent:'space-between'}}>
            <h3 className='text-2xl font-semibold'>Students</h3>
            <BackpackOutlinedIcon className=''/>
          </div>
          <div className='border border-black-500 w-[160px] ml-[40px] '></div>
          <h1 className=' text-center text-2xl font-extrabold m-3'>50,000</h1>
        </div>



        <div className='card w-[250px] h-[130px] text-white item-center flex flex-column shadow-lg bg-gradient-to-b from-blue-900 via-blue-700 to-blue-900 m-2'>
          <div className='card-inner flex m-3' style={{justifyContent:'space-between'}}>
            <h3 className='text-2xl font-semibold'>Teachers</h3>
           
            <SchoolOutlinedIcon/>
          </div>
          <div className='border border-black-500 w-[160px] ml-[40px] '></div>
          <h1 className=' text-center text-2xl font-extrabold m-3'>10,000</h1>
        </div>



        <div className='card w-[250px] h-[130px] text-white item-center flex flex-column shadow-lg bg-gradient-to-b from-blue-900 via-blue-700 to-blue-900 m-2'>
          <div className='card-inner flex m-3' style={{justifyContent:'space-between'}}>
            <h3 className='text-2xl font-semibold'>Parents</h3>
            <SupervisorAccountOutlinedIcon/>
          </div>
          <div className='border border-black-500 w-[160px] ml-[40px] '></div>
          <h1  className=' text-center text-2xl font-extrabold m-3'>15,000</h1>
        </div>



        <div className='card w-[250px] h-[130px] text-white item-center flex flex-column shadow-lg bg-gradient-to-b from-blue-900 via-blue-700 to-blue-900 m-2'>
          <div className='card-inner flex m-3' style={{justifyContent:'space-between'}}>
            <h3 className='text-2xl font-semibold'>Income</h3>
            <CurrencyExchangeIcon/>
          </div>
          <div className='border border-black-500 w-[160px] ml-[40px] '></div>
          <h1 className=' text-center text-2xl font-extrabold m-3'>$30,000</h1>
        </div>
      </div>
    
        <div>
              <div className='flex m-2'>
                    <div className='w-[520px] h-[380px] item-center flex t p-0' >
                        <Bar options={options} data={data} className='h-[300px] mt-[50px]' />
                    </div>

                  <div className=' '>
                    <div className='flex'>
                          <div className='card w-[250px] h-[150px] text-white item-center flex flex-column shadow-lg bg-gradient-to-b from-blue-900 via-blue-700 to-blue-900 p-4 m-3' >
                                <img src={facebook} alt="" className='w-[40px] h-[40px] mb-2'/>
                            <div className='flex '>
                                <p className='justify'>Like us on Facebook</p>&nbsp;&nbsp;
                                <div className='border border-black-500 h-[30px]  float-left m-2 '></div>&nbsp;&nbsp;
                                <h1 className='m-2'>30,000</h1>
                            </div>
                          </div>


                          <div className='card w-[250px] h-[150px] text-white item-center flex flex-column shadow-lg bg-gradient-to-b from-blue-900 via-blue-700 to-blue-900 p-4 m-2'>
                            <img src={twit} alt="" className='w-[40px] h-[40px] mb-4' />
                            <div className='flex'>
                              <p>Follow us on Twitter</p>
                              <div className='border border-black-500 h-[30px]  float-left m-2'></div>
                              <h1 className='m-2'>13,000</h1>
                            </div>
                          </div>
                      </div>

                      <div className='flex m-2  '>
                          <div className='card w-[250px] h-[150px] text-white item-center flex flex-column shadow-lg bg-gradient-to-b from-blue-900 via-blue-700 to-blue-900 p-4 m-2'>
                            <img src={google} alt=""  className='w-[50px] h-[50px] mb-4' />
                            <div className='flex'>
                              <p>Follow us on Google plus</p>
                              <div className='border border-black-500 h-[30px]  float-left m-2'></div>
                              <h1 className='m-2'>9,000</h1>
                            </div>
                          </div>


                          <div className='card w-[250px] h-[150px] text-white item-center flex flex-column shadow-lg bg-gradient-to-b from-blue-900 via-blue-700 to-blue-900 p-4 m-2' > 
                            <img src={linkedin} alt="" className='w-[40px] h-[40px] mb-4' />
                            <div className='flex'>
                              <p>Follow us on LinkedIn</p>
                              <div className='border border-black-500 h-[30px]  float-left m-2 '></div>
                              <h1 className='m-2'>18,000</h1>
                            </div>
                          </div>
                        </div>
                    </div>
              </div>


               <div className='flex'>
                    <div className='m-2 '>
                        <div style={wrapperStyle}>
                          <Calendar fullscreen={false} onPanelChange={onPanelChange} className='w-[510px] h-[350px] border-2 p-2'/>
                        </div>
                    </div>

                    <div className='m-2 border-2'>
                      <div>
                        <div className='text-2xl text-center text-blue-900 font-semibold m-2'>
                            <h2><StickyNote2OutlinedIcon/>Notice Board</h2>
                        </div>
                        
                        <div className='border border-black-500 w-[250px]   m-2 '></div>

                      </div>
                    </div>


                    <div className='m-2 border-2'>
                      <div>
                        <div className='text-2xl text-center text-blue-900 font-semibold m-2'>
                            <h2><StickyNote2OutlinedIcon/>Notice Board</h2>
                        </div>
                        
                        <div className='border border-black-500 w-[250px]   m-2 '></div>

                      </div>
                    </div>
                </div>
        </div>

        
    </div>
  )
}

export default Dashboard
