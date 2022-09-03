import React from 'react'

export default function FormChat () {
    return (
        <div className='intake_from'>
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
                            THÔNG TIN CÁ NHÂN
                        </h1>
                    </div>
                    <form>
                        <div className='row'>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >Họ:<span>*</span> </label>
                                    <input className='form-control' placeholder='Họ' />
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >Tên:</label>
                                    <input className='form-control' placeholder='Tên' />
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >Giới Tính:<span>*</span> </label>
                                    <select className='form-control select-gender' placeholder='Select Gender'>
                                        <option>Nam</option>
                                        <option>Nữ</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >Số điện thoại: <span>*</span> </label>
                                    <div className='row'>
                                        <select className='col-md-4 col-sm-4 col-4 select-left '>

                                            <option>84</option>
                                        </select>

                                        <div className='col-md-8 col-sm-8 col-6 mobile-box'>
                                            <input className='form-control' placeholder='Nhập số điện thoại' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >Nhập ngày sinh:<span>*</span> </label>
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
                                    <label >Thời gian sinh:<span>*</span> </label>
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
                                    <label >Nhập nơi sinh:<span>*</span> </label>
                                    <input className='form-control' placeholder='Nhập nơi sinh' />
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >Tình trạng hôn nhân:<span>*</span> </label>
                                    <select className='form-control select-gender' placeholder='Select Marital Status'>
                                        <option>Độc thân</option>
                                        <option>Kết hôn</option>
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >Nghề nghiệp: </label>
                                    <select className='form-control select-gender' placeholder='Select Employed in'>
                                        <option>Private Sector</option>
                                        <option>Gvot Sector</option>
                                        <option>Civil Services</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className='form-group'>
                                    <label >Chủ đề quan tâm: </label>
                                    <select className='form-control select-gender' placeholder='Select Topic of cncern'>
                                        <option>Sự nghiệp và Kinh doanh</option>
                                        <option>Hôn nhân</option>
                                        <option>Tình yêu mối quan hệ</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='display_set_btn'>
                            <button type='submit' className='btn btn-default green'>Trò chuyên qua facebook </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
