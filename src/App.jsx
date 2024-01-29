import {bar} from 'react-chartjs-2'
import './App.css'
import SideBar from './components/sidebar/SideBar'
import graph_icon1 from '/src/assets/graph_icon1.svg'
import graph_icon2 from '/src/assets/graph_icon2.svg'
import graph_icon3 from '/src/assets/graph_icon3.svg'
import graph_icon4 from '/src/assets/graph_icon4.svg'
import main_graph from '/src/assets/main_graph.png'
import graph1 from '/src/assets/graph1.svg'
import graph2 from '/src/assets/graph2.svg'
import wavy_arrow_down from '/src/assets/wavy_arrow_down.svg'
import wavy_arrow_up from '/src/assets/wavy_arrow_up.svg'


function App() {

  return (
    <div className='app_container'>
        <SideBar />
        <bar />
        <main>
          <header className='main_header px-8 py-2 flex justify-between items-center'>
            <div class="logo font-bold">Dashboard</div>
            <div class="header_main_wrapper flex items-center gap-2">
                <div class="search_wrapper">
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <input type="search" placeholder="Search" />
                </div>
                <div class="calender_wrapper">
                    <h4>Calendar</h4>
                </div>
                <div class="notification_wrapper">
                    <i class="fa fa-bell-o" aria-hidden="true"></i>
                </div>
                <div class="user_info gap-2 items-center">
                    <div class="img_bx w-10 h-10 rounded-full">
                        <img className='w-full h-full rounded-full' src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Profile Image" />
                    </div>
                    <div class="user_title">
                        <h4 id="name" className='font-bold' title="Justin Bergson">Justin Bergson</h4>
                        <p id="email" className='-mt-1'>Justin@gmail.com</p>
                    </div>
                    <div class="drop_down_arrow">
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
          </header>

          <div className="main_wrapper p-4 flex">
            <div className="left">
                <div className="top">
                    <img className='w-full' src={main_graph} alt="" />
                </div>
                <div className="bottom">
                    <header className='flex justify-between'>
                        <h2 className="font-bold">Last order</h2>
                        <button className='text-green-500'>See All</button>
                    </header>
                    <table className="w-full flex flex-col gap-4">
                        
                        <tr className="table_head w-full my-2 flex justify-between font-medium gap-20">
                            <th>Name</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Invoice</th>
                        </tr>
                        <tr  className="table_data w-full flex justify-between gap-20">
                            <td className="flex items-center gap-2"><img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="w-8 h-8 rounded-full" /> <p>Marcus Bergson</p></td>
                            <td>Nov 15, 2023</td>
                            <td>$80,000</td>
                            <td>Paid</td>
                            <td><button>View</button></td>
                        </tr>
                        <tr  className="table_data w-full flex justify-between gap-20">
                            <td className="flex items-center gap-2"><img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="w-8 h-8 rounded-full" /> <p>Jaydon Vaccaro</p></td>
                            <td>Nov 15, 2023</td>
                            <td>$80,000</td>
                            <td>Refund</td>
                            <td><button>View</button></td>
                        </tr>
                        <tr  className="table_data w-full flex justify-between gap-20">
                            <td className="flex items-center gap-2"><img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="w-8 h-8 rounded-full" /> <p>Corey Schleifer</p></td>
                            <td>Nov 15, 2023</td>
                            <td>$80,000</td>
                            <td>Paid</td>
                            <td><button>View</button></td>
                        </tr>
                        <tr  className="table_data w-full flex justify-between gap-20">
                            <td className="flex items-center gap-2"><img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="w-8 h-8 rounded-full" /> <p>Cooper Press</p></td>
                            <td>Nov 15, 2023</td>
                            <td>$80,000</td>
                            <td>Refund</td>
                            <td><button>View</button></td>
                        </tr>
                        <tr  className="table_data w-full flex justify-between gap-20">
                            <td className="flex items-center gap-2"><img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="w-8 h-8 rounded-full" /> <p>Phillip Lubin</p></td>
                            <td>Nov 15, 2023</td>
                            <td>$80,000</td>
                            <td>Paid</td>
                            <td><button>View</button></td>
                        </tr>
                        
                    </table>
                </div>
            </div>
            <div className="right flex flex-col gap-2">
                <div className="top">
                    <div className="chart flex">
                      <span className='graph_container'>
                        <img src={graph_icon1} alt="" />
                        <img src={graph1} alt="" />
                      </span>
                      <h3 className='text-gray-400 text-xl font-medium'>Total Order</h3>
                      <p className='text-2xl font-bold'>350</p>
                      <span className='percentage flex items-center gap-2'>
                          <span className='rate flex items-center gap-1'> 
                            <img src={wavy_arrow_up} alt="" />
                            <p className=''>23.5%</p>
                          </span>
                         
                          <p className='font-medium text-gray-500'>vs. previous month</p>
                    
                      </span>
                    </div>

                    <div className="chart flex">
                      <span className='graph_container'>
                        <img src={graph_icon2} alt="" />
                        <img src={graph2} alt="" />
                      </span>
                      <h3 className='text-gray-400 text-xl font-medium'>Total Order</h3>
                      <p className='text-2xl font-bold'>270</p>
                      <span className='percentage flex items-center gap-2'>
                          <span className='rate flex items-center gap-1'> 
                            <img src={wavy_arrow_down} alt="" />
                            <p className=''>23.5%</p>
                          </span>
                         
                          <p className='font-medium text-gray-500'>vs. previous month</p>
                    
                      </span>
                    </div>

                    <div className="chart flex">
                      <span className='graph_container'>
                        <img src={graph_icon3} alt="" />
                        <img src={graph2} alt="" />
                      </span>
                      <h3 className='text-gray-400 text-xl font-medium'>Total Order</h3>
                      <p className='text-2xl font-bold'>1567</p>
                      <span className='percentage flex items-center gap-2'>
                          <span className='rate flex items-center gap-1'> 
                            <img src={wavy_arrow_down} alt="" />
                            <p className=''>23.5%</p>
                          </span>
                         
                          <p className='font-medium text-gray-500'>vs. previous month</p>
                    
                      </span>
                    </div>

                    <div className="chart flex">
                      <span className='graph_container'>
                        <img src={graph_icon4} alt="" />
                        <img src={graph1} alt="" />
                      </span>
                      <h3 className='text-gray-400 text-xl font-medium'>Total Order</h3>
                      <p className='text-2xl font-bold'>$350.00</p>
                      <span className='percentage flex items-center gap-2'>
                          <span className='rate flex items-center gap-1'> 
                            <img src={wavy_arrow_up} alt="" />
                            <p className=''>23.5%</p>
                          </span>
                         
                          <p className='font-medium text-gray-500'>vs. previous month</p>
                    
                      </span>
                    </div>
                    {/* <div className="chart"></div>
                    <div className="chart"></div>
                    <div className="chart"></div> */}
                </div>
                <div className="bottom ">
                    <header className='flex justify-between'>
                        <h2 className="font-bold">Top Platform</h2>
                        <button className='text-green-500'>See All</button>
                    </header>
                    <div className="top_platform flex flex-col gap-2">
                      <div className="content mt-2 flex flex-col">
                        <h4 className='font-bold -mb-2'>Book Bazaar</h4>
                        <input type="range" />
                        <span className='text-gray-400 flex justify-between -mt-2'>
                          <p>$2,500,000</p>
                          <p>+15%</p>
                        </span>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </main>
    </div>
  )
  }

export default App
