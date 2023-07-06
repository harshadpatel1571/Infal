import React from 'react'
import Chart from 'react-google-charts'
import { Link } from 'react-router-dom'

import Employee from './Employee'

const LineData = [
    ['x', '2020', '2021', '2022'],
    ['Jan', 0, 0, 0],
    ['Feb', 10, 5, 15],
    ['Mar', 23, 15, 20],
    ['Apr', 17, 9, 26],
    ['May', 18, 10, 20],
    ['Jun', 9, 5, 10],
    ['Jul', 11, 3, 6],
    ['Aug', 27, 19, 30],
    ['Sup', 20, 15, 50],
    ['Oct', 21, 15, 30],
    ['Nov', 22, 10, 35],
    ['Dec', 20, 17, 0],
]
const LineChartOptions = {
    hAxis: {
        title: '',
    },
    vAxis: {
        title: '',
    },
    series: {
        1: { curveType: 'function' },
    },
}

export default function Dashboard() {
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
            </nav>

            <div className='row p-3'>
                <div className='col-sm-9'>
                    <h3>Welcome back, Olivia</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur</p>
                </div>
                <div className='col-sm-3'>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search..." />
                    </div>
                </div>
            </div>

            <Chart
                // width={'700px'}
                // height={'410px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={LineData}
                options={LineChartOptions}
                rootProps={{ 'data-testid': '2' }}
            />

            <div className="row p-5">
                <div className="col-xl-4 col-lg-6">
                    <div className="card card-stats mb-4 mb-xl-0">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 className="card-title text-uppercase text-muted mb-0">Traffic</h5>
                                    <span className="h2 font-weight-bold mb-0">350,897</span>
                                </div>
                                <div className="col-auto">
                                    <i className="fa fa-ellipsis-vertical"></i>
                                </div>
                            </div>
                            <p className="mt-3 mb-0 text-muted text-sm">
                                <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                                <span className="text-nowrap">Since last month</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <div className="card card-stats mb-4 mb-xl-0">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 className="card-title text-uppercase text-muted mb-0">New users</h5>
                                    <span className="h2 font-weight-bold mb-0">2,356</span>
                                </div>
                                <div className="col-auto">
                                    <i className="fa fa-ellipsis-vertical"></i>
                                </div>
                            </div>
                            <p className="mt-3 mb-0 text-muted text-sm">
                                <span className="text-danger mr-2"><i className="fas fa-arrow-down"></i> 3.48%</span>
                                <span className="text-nowrap">Since last week</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <div className="card card-stats mb-4 mb-xl-0">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 className="card-title text-uppercase text-muted mb-0">Sales</h5>
                                    <span className="h2 font-weight-bold mb-0">924</span>
                                </div>
                                <div className="col-auto">
                                    <i className="fa fa-ellipsis-vertical"></i>
                                </div>
                            </div>
                            <p className="mt-3 mb-0 text-muted text-sm">
                                <span className="text-warning mr-2"><i className="fas fa-arrow-down"></i> 1.10%</span>
                                <span className="text-nowrap">Since yesterday</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row card'>
                <div className='card-body col-sm-12'>
                    <Employee></Employee>
                </div>
            </div>
        </>
    )
}
