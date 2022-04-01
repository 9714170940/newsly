import React from 'react';
import CustomChart from '../../Common/CustomChart';
import CustomResizeBox from '../../Common/CustomResizeBox';
import { LineChart, lineOption, pieChart, pieOption } from '../../utils/chart';

const Index = () => {


  return (
    <div className='container-fluid d-flex'>
      <CustomResizeBox width={700} height={400} resizable={true}>
          <div className='container-fluid p-3'>
            <CustomChart 
            data={LineChart} 
            chartType='LineChart'
            width="100%"
            height="500px" 
            options={lineOption} />
          </div>
      </CustomResizeBox>
      <CustomResizeBox width={600} height={400} resizable={true}>
          <div className='container-fluid p-3'>
            <CustomChart 
            data={pieChart} 
            chartType='PieChart'
            width="100%"
            height="500px" 
            options={pieOption} />
          </div>
      </CustomResizeBox>
    </div>
  )
};

export default Index;
