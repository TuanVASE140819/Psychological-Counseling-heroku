import { Button, message, Steps, Tabs, Table, Modal, Input } from 'antd';
import React, { useState } from 'react';
import { ColumnsType } from 'antd/es/table';
const { Step } = Steps;


export default function FormCall () {
    const { TextArea } = Input;
    const { TabPane } = Tabs;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Age', dataIndex: 'age', key: 'age' },
        { title: 'Address', dataIndex: 'address', key: 'address' },
        {
            title: 'Action',
            // dataIndex: '',
            // key: 'x',
            render: () => <a className='text-danger border-0!important' onClick={showModal}>Delete</a>
        },
    ];
    const data = [
        {
            key: 1,
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
        },
        {
            key: 2,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
        },
        {
            key: 3,
            name: 'Not Expandable',
            age: 29,
            address: 'Jiangsu No. 1 Lake Park',
            description: 'This not expandable',
        },
        {
            key: 4,
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
        },
    ];




    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const forma = () => {
        return <form className='container' onSubmit={handleSubmit} >
            <div style={{ width: '100%', height: '42px', background: "#9a75f0", }}></div>
            <div style={{ width: '100%', height: '100%', paddingBottom: '30px', background: '#F7EAEA', marginBottom: '20px' }}>
                <Tabs defaultActiveKey="1" centered style={{ padding: '0 20px' }}>
                    <TabPane tab="Th??? 2" key="1"  >
                        <div className=' mt-3'>
                            <div style={{ display: 'grid', gridTemplateColumns: '100px 50px 100px', gridTemplateColumns: 'auto auto auto auto  ', columnGap: '10px', rowGap: '15px' }}>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:00 - 7:15</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:15 - 7:30</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:30 - 7:45</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:45 - 8:00</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:00 - 8:15</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:15 - 8:30</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:30 - 8:45</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:45 - 9:00</button>


                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Th??? 3" key="2">
                    <div className=' mt-3'>
                            <div style={{ display: 'grid', gridTemplateColumns: '100px 50px 100px', gridTemplateColumns: 'auto auto auto auto  ', columnGap: '10px', rowGap: '15px' }}>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:00 - 7:15</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:15 - 7:30</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:30 - 7:45</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:45 - 8:00</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:00 - 8:15</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:15 - 8:30</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:30 - 8:45</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:45 - 9:00</button>


                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Th??? 4" key="3">
                    <div className=' mt-3'>
                            <div style={{ display: 'grid', gridTemplateColumns: '100px 50px 100px', gridTemplateColumns: 'auto auto auto auto  ', columnGap: '10px', rowGap: '15px' }}>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:00 - 7:15</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:15 - 7:30</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:30 - 7:45</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:45 - 8:00</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:00 - 8:15</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:15 - 8:30</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:30 - 8:45</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:45 - 9:00</button>


                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Th??? 5" key="4">
                    <div className=' mt-3'>
                            <div style={{ display: 'grid', gridTemplateColumns: '100px 50px 100px', gridTemplateColumns: 'auto auto auto auto  ', columnGap: '10px', rowGap: '15px' }}>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:00 - 7:15</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:15 - 7:30</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:30 - 7:45</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:45 - 8:00</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:00 - 8:15</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:15 - 8:30</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:30 - 8:45</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:45 - 9:00</button>


                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Th??? 6" key="5">
                    <div className=' mt-3'>
                            <div style={{ display: 'grid', gridTemplateColumns: '100px 50px 100px', gridTemplateColumns: 'auto auto auto auto  ', columnGap: '10px', rowGap: '15px' }}>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:00 - 7:15</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:15 - 7:30</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:30 - 7:45</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:45 - 8:00</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:00 - 8:15</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:15 - 8:30</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:30 - 8:45</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:45 - 9:00</button>


                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Th??? 7" key="6">
                    <div className=' mt-3'>
                            <div style={{ display: 'grid', gridTemplateColumns: '100px 50px 100px', gridTemplateColumns: 'auto auto auto auto  ', columnGap: '10px', rowGap: '15px' }}>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:00 - 7:15</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:15 - 7:30</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:30 - 7:45</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:45 - 8:00</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:00 - 8:15</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:15 - 8:30</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:30 - 8:45</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:45 - 9:00</button>


                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Ch??? nh???t" key="7">
                    <div className=' mt-3'>
                            <div style={{ display: 'grid', gridTemplateColumns: '100px 50px 100px', gridTemplateColumns: 'auto auto auto auto  ', columnGap: '10px', rowGap: '15px' }}>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:00 - 7:15</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:15 - 7:30</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:30 - 7:45</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>7:45 - 8:00</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:00 - 8:15</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:15 - 8:30</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:30 - 8:45</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px',borderRadius: '20px' }}>8:45 - 9:00</button>


                            </div>
                        </div>
                    </TabPane>
                </Tabs>
            </div>


        </form>


    }

    const formb = () => {
        return <form className='container' style={{}} onSubmit={handleSubmit}  >
            <div style={{ width: '100%', height: '42px', background: "#9a75f0" }}></div>
            <div style={{ width: '100%', height: '100%', paddingBottom: '30px', background: '#D9D9D9', marginBottom: '20px', paddingTop: '20px' }}>
            <div className='intake_from2'>
            {/* <div className='container'>
                <ul className="profile-nav">
                    <li>
                        <i className="fa fa-home text-black home" />
                    </li>
                    <li>
                        <a href="#" className="profile-address">Sapna's Profile</a>
                    </li>
                </ul>
            </div> */}

            <div className='row m-0'>
                <div className='bg_color_Set'>

                    <div className='col-12'>
                        <h1 className='heading_intake_form'>
                            TH??NG TIN C?? NH??N
                        </h1>
                    </div>
                    <form>
                        <div className='row'>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >H???:<span>*</span> </label>
                                    <input className='form-control' placeholder='H???' />
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >T??n:</label>
                                    <input className='form-control' placeholder='T??n' />
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >Gi???i T??nh:<span>*</span> </label>
                                    <select className='form-control select-gender' placeholder='Select Gender'>
                                        <option>Nam</option>
                                        <option>N???</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >S??? ??i???n tho???i: <span>*</span> </label>
                                    <div className='row'>
                                        <select className='col-md-4 col-sm-4 col-4 select-left '>

                                            <option>84</option>
                                        </select>

                                        <div className='col-md-8 col-sm-8 col-6 mobile-box'>
                                            <input className='form-control' placeholder='Nh???p s??? ??i???n tho???i' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >Nh???p ng??y sinh:<span>*</span> </label>
                                    <div className='input-group datetime '>
                                        <div className='input-group'>
                                            {/* <div className='input-group-addon'>
                                                <i className='fa fa-calendar' />

                                            </div> */}
                                            <input type='date' className='form-control cala-formm' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >Th???i gian sinh:<span>*</span> </label>
                                    <div className='input-group datetime '>
                                        <div className='input-group'>

                                            <input type='time' className='form-control cala-formm' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >Nh???p n??i sinh:<span>*</span> </label>
                                    <input className='form-control' placeholder='Nh???p n??i sinh' />
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >T??nh tr???ng h??n nh??n:<span>*</span> </label>
                                    <select className='form-control select-gender' placeholder='Select Marital Status'>
                                        <option>?????c th??n</option>
                                        <option>K???t h??n</option>
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >Ngh??? nghi???p: </label>
                                    <select className='form-control select-gender' placeholder='Select Employed in'>
                                        <option>Private Sector</option>
                                        <option>Gvot Sector</option>
                                        <option>Civil Services</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >Ch??? ????? quan t??m: </label>
                                    <select className='form-control select-gender' placeholder='Select Topic of cncern'>
                                        <option>S??? nghi???p v?? Kinh doanh</option>
                                        <option>H??n nh??n</option>
                                        <option>T??nh y??u m???i quan h???</option>
                                    </select>
                                </div>
                            </div>
                        </div>  
                    </form>
                </div>

            </div>
        </div>

            </div>
        </form>


    }
    const formc = () => {
        return <form className='container' onSubmit={handleSubmit} >
            <div style={{ width: '100%', height: '42px', background: "#9a75f0" }}></div>
            <div style={{ width: '100%', height: '100%', paddingBottom: '10px', background: '#D9D9D9', marginBottom: '20px', paddingTop: '20px' }}>
                <div className='container' >
                    <p style={{ fontSize: '20px' }}>T??n Nh??n Vi??n : <span style={{paddingLeft:"20px"}}>H??? Kh???i</span></p>
                    <p style={{ fontSize: '20px' }}>Gi?? : <span>20 cua</span></p>
                    <p style={{ fontSize: '20px' }}>Ng??y : <span>15/8/2000</span></p>
                </div>
                <hr />
                <div>
                    <div className='container' >
                        <p style={{ fontSize: '20px' }}>T??n Nh??n Vi??n : <span>H??? Kh???i</span></p>
                        <p style={{ fontSize: '20px' }}>Gi?? : <span>20 cua</span></p>
                        <p style={{ fontSize: '20px' }}>Ng??y : <span>15/8/2000</span></p>
                    </div>
                </div>

            </div>
        </form>


    }
    const formd = () => {
        return <form className='container' onSubmit={handleSubmit} >
            <div style={{ width: '100%', height: '42px', background: "#9a75f0", }}></div>
            <div style={{ width: '100%', height: '100%', background: '#D9D9D9', marginBottom: '20px' }}>

                <Table
                    columns={columns}
                    expandable={{
                        expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                        rowExpandable: record => record.name !== 'Not Expandable',
                    }}
                    dataSource={data}
                />
            </div>
        </form >


    }
    const steps = [
        {
            title: 'Ch???n L???ch',
            content: forma(),
        },
        {
            title: 'Th??ng tin c?? nh??n',
            content: formb(),
        },
        {
            title: 'X??c nh??n & thanh to??n',
            content: formc(),
        },
        {
            title: 'Last',
            content: formd(),
        },
    ];
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };
    return (
        <div className='container'>
            <Steps current={current} style={{ marginBottom: '30px' }}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action text-right" >
                {current < steps.length - 1 && (
                    <Button style={{background:"#9a75f0"}} type="primary" onClick={() => next()}>
                        Ti???p
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button style={{background:"#9a75f0"}}  type="primary" onClick={() => message.success('Processing complete!')}>
                        Xong
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Quay l???i
                    </Button>
                )}
            </div>
            <div>
                <Modal title="L?? Do" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <TextArea showCount maxLength={400} style={{ height: 120 }} />
                </Modal>
            </div>
        </div>
    )
}